# Swedwise IMS Documentation Platform
# Makefile for development utilities
#
# Usage: make <target>
# Run 'make help' to see available commands

.PHONY: help dev start stop build clean install lint typecheck test \
        db-generate db-push db-migrate db-studio \
        docs-count docs-validate docs-status \
        git-status git-commit \
        export-pdf

# Default target
.DEFAULT_GOAL := help

# Colors for output
CYAN := \033[36m
GREEN := \033[32m
YELLOW := \033[33m
RED := \033[31m
RESET := \033[0m

# Paths
WEB_DIR := apps/web
CONTENT_DIR := content
IMS_DIR := $(CONTENT_DIR)/ims
SAAS_DIR := $(CONTENT_DIR)/saas

# PID file for background dev server
PID_FILE := .dev-server.pid

#------------------------------------------------------------------------------
# Help
#------------------------------------------------------------------------------

help: ## Show this help message
	@echo ""
	@echo "$(CYAN)Swedwise IMS Documentation Platform$(RESET)"
	@echo "$(CYAN)=====================================$(RESET)"
	@echo ""
	@echo "$(GREEN)Development:$(RESET)"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | grep -E '(dev|start|stop|build|clean|install)' | awk 'BEGIN {FS = ":.*?## "}; {printf "  $(CYAN)%-18s$(RESET) %s\n", $$1, $$2}'
	@echo ""
	@echo "$(GREEN)Code Quality:$(RESET)"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | grep -E '(lint|typecheck|test)' | awk 'BEGIN {FS = ":.*?## "}; {printf "  $(CYAN)%-18s$(RESET) %s\n", $$1, $$2}'
	@echo ""
	@echo "$(GREEN)Database:$(RESET)"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | grep -E 'db-' | awk 'BEGIN {FS = ":.*?## "}; {printf "  $(CYAN)%-18s$(RESET) %s\n", $$1, $$2}'
	@echo ""
	@echo "$(GREEN)Documentation:$(RESET)"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | grep -E 'docs-' | awk 'BEGIN {FS = ":.*?## "}; {printf "  $(CYAN)%-18s$(RESET) %s\n", $$1, $$2}'
	@echo ""
	@echo "$(GREEN)Git:$(RESET)"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | grep -E 'git-' | awk 'BEGIN {FS = ":.*?## "}; {printf "  $(CYAN)%-18s$(RESET) %s\n", $$1, $$2}'
	@echo ""

#------------------------------------------------------------------------------
# Development Server
#------------------------------------------------------------------------------

dev: ## Start development server (foreground)
	@echo "$(GREEN)Starting development server...$(RESET)"
	cd $(WEB_DIR) && npm run dev

start: ## Start development server (background)
	@if [ -f $(PID_FILE) ] && kill -0 $$(cat $(PID_FILE)) 2>/dev/null; then \
		echo "$(YELLOW)Dev server already running (PID: $$(cat $(PID_FILE)))$(RESET)"; \
	else \
		echo "$(GREEN)Starting development server in background...$(RESET)"; \
		cd $(WEB_DIR) && npm run dev > /tmp/dev-server.log 2>&1 & echo $$! > ../../$(PID_FILE); \
		sleep 2; \
		echo "$(GREEN)Dev server started (PID: $$(cat $(PID_FILE)))$(RESET)"; \
		echo "$(CYAN)View at: http://localhost:3000$(RESET)"; \
		echo "$(CYAN)Logs at: /tmp/dev-server.log$(RESET)"; \
	fi

stop: ## Stop background development server
	@if [ -f $(PID_FILE) ]; then \
		PID=$$(cat $(PID_FILE)); \
		if kill -0 $$PID 2>/dev/null; then \
			echo "$(YELLOW)Stopping dev server (PID: $$PID)...$(RESET)"; \
			kill $$PID; \
			rm -f $(PID_FILE); \
			echo "$(GREEN)Dev server stopped$(RESET)"; \
		else \
			echo "$(YELLOW)Dev server not running (stale PID file)$(RESET)"; \
			rm -f $(PID_FILE); \
		fi \
	else \
		echo "$(YELLOW)No dev server PID file found$(RESET)"; \
	fi

status: ## Check if development server is running
	@if [ -f $(PID_FILE) ] && kill -0 $$(cat $(PID_FILE)) 2>/dev/null; then \
		echo "$(GREEN)Dev server is running (PID: $$(cat $(PID_FILE)))$(RESET)"; \
		echo "$(CYAN)View at: http://localhost:3000$(RESET)"; \
	else \
		echo "$(YELLOW)Dev server is not running$(RESET)"; \
	fi

logs: ## Tail the development server logs
	@tail -f /tmp/dev-server.log

#------------------------------------------------------------------------------
# Build & Install
#------------------------------------------------------------------------------

install: ## Install dependencies
	@echo "$(GREEN)Installing dependencies...$(RESET)"
	cd $(WEB_DIR) && npm install

build: ## Build for production
	@echo "$(GREEN)Building for production...$(RESET)"
	cd $(WEB_DIR) && npm run build

clean: ## Clean build artifacts and node_modules
	@echo "$(YELLOW)Cleaning build artifacts...$(RESET)"
	rm -rf $(WEB_DIR)/.next
	rm -rf $(WEB_DIR)/node_modules/.cache
	@echo "$(GREEN)Clean complete$(RESET)"

clean-all: clean ## Clean everything including node_modules
	@echo "$(YELLOW)Removing node_modules...$(RESET)"
	rm -rf $(WEB_DIR)/node_modules
	@echo "$(GREEN)Full clean complete$(RESET)"

#------------------------------------------------------------------------------
# Code Quality
#------------------------------------------------------------------------------

lint: ## Run ESLint
	@echo "$(GREEN)Running ESLint...$(RESET)"
	cd $(WEB_DIR) && npm run lint

typecheck: ## Run TypeScript type checking
	@echo "$(GREEN)Running TypeScript type check...$(RESET)"
	cd $(WEB_DIR) && npm run typecheck

check: lint typecheck ## Run all code quality checks

#------------------------------------------------------------------------------
# Database (Prisma)
#------------------------------------------------------------------------------

db-generate: ## Generate Prisma client
	@echo "$(GREEN)Generating Prisma client...$(RESET)"
	cd $(WEB_DIR) && npm run db:generate

db-push: ## Push schema to database
	@echo "$(GREEN)Pushing schema to database...$(RESET)"
	cd $(WEB_DIR) && npm run db:push

db-migrate: ## Run database migrations
	@echo "$(GREEN)Running database migrations...$(RESET)"
	cd $(WEB_DIR) && npm run db:migrate

db-studio: ## Open Prisma Studio
	@echo "$(GREEN)Opening Prisma Studio...$(RESET)"
	cd $(WEB_DIR) && npm run db:studio

#------------------------------------------------------------------------------
# Documentation Utilities
#------------------------------------------------------------------------------

docs-count: ## Count documents by category
	@echo ""
	@echo "$(CYAN)IMS Document Counts$(RESET)"
	@echo "$(CYAN)===================$(RESET)"
	@echo ""
	@echo "$(GREEN)Policies:$(RESET)          $$(find $(IMS_DIR)/policies -name '*.md' 2>/dev/null | wc -l | tr -d ' ')"
	@echo "$(GREEN)Procedures:$(RESET)        $$(find $(IMS_DIR)/procedures -name '*.md' 2>/dev/null | wc -l | tr -d ' ')"
	@echo "$(GREEN)Guidelines:$(RESET)        $$(find $(IMS_DIR)/guidelines -name '*.md' 2>/dev/null | wc -l | tr -d ' ')"
	@echo "$(GREEN)Role Descriptions:$(RESET) $$(find $(IMS_DIR)/role-descriptions -name '*.md' 2>/dev/null | wc -l | tr -d ' ')"
	@echo "$(GREEN)Forms:$(RESET)             $$(find $(IMS_DIR)/forms -name '*.md' 2>/dev/null | wc -l | tr -d ' ')"
	@echo "$(GREEN)Training:$(RESET)          $$(find $(IMS_DIR)/training -name '*.md' 2>/dev/null | wc -l | tr -d ' ')"
	@echo "$(GREEN)Registers:$(RESET)         $$(find $(IMS_DIR)/registers -name '*.md' 2>/dev/null | wc -l | tr -d ' ')"
	@echo "$(GREEN)IMS Manual:$(RESET)        $$(find $(IMS_DIR)/ims-manual -name '*.md' 2>/dev/null | wc -l | tr -d ' ')"
	@echo ""
	@echo "$(CYAN)IMS Total:$(RESET)         $$(find $(IMS_DIR) -name '*.md' 2>/dev/null | wc -l | tr -d ' ')"
	@echo ""
	@echo "$(CYAN)SaaS Document Counts$(RESET)"
	@echo "$(CYAN)====================$(RESET)"
	@echo ""
	@echo "$(GREEN)Service Description:$(RESET) $$(find $(SAAS_DIR)/service-description -name '*.md' 2>/dev/null | wc -l | tr -d ' ')"
	@echo "$(GREEN)Service Components:$(RESET)  $$(find $(SAAS_DIR)/service-components -name '*.md' 2>/dev/null | wc -l | tr -d ' ')"
	@echo "$(GREEN)Operations:$(RESET)          $$(find $(SAAS_DIR)/operations -name '*.md' 2>/dev/null | wc -l | tr -d ' ')"
	@echo "$(GREEN)Onboarding:$(RESET)          $$(find $(SAAS_DIR)/onboarding -name '*.md' 2>/dev/null | wc -l | tr -d ' ')"
	@echo "$(GREEN)Pricing:$(RESET)             $$(find $(SAAS_DIR)/pricing -name '*.md' 2>/dev/null | wc -l | tr -d ' ')"
	@echo "$(GREEN)Sales Materials:$(RESET)     $$(find $(SAAS_DIR)/sales-materials -name '*.md' 2>/dev/null | wc -l | tr -d ' ')"
	@echo "$(GREEN)Training:$(RESET)            $$(find $(SAAS_DIR)/training -name '*.md' 2>/dev/null | wc -l | tr -d ' ')"
	@echo ""
	@echo "$(CYAN)SaaS Total:$(RESET)        $$(find $(SAAS_DIR) -name '*.md' 2>/dev/null | wc -l | tr -d ' ')"
	@echo ""
	@echo "$(CYAN)=============================$(RESET)"
	@echo "$(CYAN)Grand Total:$(RESET)       $$(find $(CONTENT_DIR) -name '*.md' 2>/dev/null | wc -l | tr -d ' ')"
	@echo ""

docs-status: ## Show document status summary (draft/review/approved)
	@echo ""
	@echo "$(CYAN)Document Status Summary$(RESET)"
	@echo "$(CYAN)=======================$(RESET)"
	@echo ""
	@echo "$(YELLOW)Draft:$(RESET)     $$(grep -r '^status: draft' $(CONTENT_DIR) 2>/dev/null | wc -l | tr -d ' ')"
	@echo "$(CYAN)Review:$(RESET)    $$(grep -r '^status: review' $(CONTENT_DIR) 2>/dev/null | wc -l | tr -d ' ')"
	@echo "$(GREEN)Approved:$(RESET)  $$(grep -r '^status: approved' $(CONTENT_DIR) 2>/dev/null | wc -l | tr -d ' ')"
	@echo "$(RED)Obsolete:$(RESET)  $$(grep -r '^status: obsolete' $(CONTENT_DIR) 2>/dev/null | wc -l | tr -d ' ')"
	@echo ""

docs-validate: ## Validate document frontmatter
	@echo "$(GREEN)Validating document frontmatter...$(RESET)"
	@echo ""
	@echo "$(CYAN)Checking for missing document_id:$(RESET)"
	@find $(CONTENT_DIR) -name '*.md' -exec sh -c 'grep -L "^document_id:" "$$1" 2>/dev/null' _ {} \; | head -20 || echo "  All documents have document_id"
	@echo ""
	@echo "$(CYAN)Checking for missing status:$(RESET)"
	@find $(CONTENT_DIR) -name '*.md' -exec sh -c 'grep -L "^status:" "$$1" 2>/dev/null' _ {} \; | head -20 || echo "  All documents have status"
	@echo ""
	@echo "$(CYAN)Checking for [TBD] placeholders:$(RESET)"
	@grep -r '\[TBD' $(CONTENT_DIR) --include='*.md' -l 2>/dev/null | wc -l | xargs -I {} echo "  {} documents contain [TBD] placeholders"
	@echo ""

docs-tbd: ## List documents with [TBD] placeholders
	@echo "$(CYAN)Documents with [TBD] placeholders:$(RESET)"
	@echo ""
	@grep -r '\[TBD' $(CONTENT_DIR) --include='*.md' -l 2>/dev/null || echo "  No [TBD] placeholders found"

docs-ids: ## List all document IDs
	@echo "$(CYAN)All Document IDs:$(RESET)"
	@echo ""
	@grep -r '^document_id:' $(CONTENT_DIR) --include='*.md' 2>/dev/null | sed 's/.*document_id: //' | sort

#------------------------------------------------------------------------------
# Git Utilities
#------------------------------------------------------------------------------

git-status: ## Show git status
	@git status

git-diff: ## Show git diff
	@git diff

git-log: ## Show recent git commits
	@git log --oneline -15

#------------------------------------------------------------------------------
# Export Utilities
#------------------------------------------------------------------------------

open: ## Open the web app in browser
	@open http://localhost:3000

open-ims: ## Open IMS documents in browser
	@open http://localhost:3000/ims/documents

open-saas: ## Open SaaS documents in browser
	@open http://localhost:3000/saas/documents

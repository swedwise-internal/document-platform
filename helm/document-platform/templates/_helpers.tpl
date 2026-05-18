{{/*
Expand the name of the chart.
*/}}
{{- define "document-platform.name" -}}
{{- default .Chart.Name .Values.nameOverride | trunc 63 | trimSuffix "-" }}
{{- end }}

{{/*
Create a default fully qualified app name.
*/}}
{{- define "document-platform.fullname" -}}
{{- $name := default .Chart.Name .Values.nameOverride }}
{{- if contains $name .Release.Name }}
{{- .Release.Name | trunc 63 | trimSuffix "-" }}
{{- else }}
{{- printf "%s-%s" .Release.Name $name | trunc 63 | trimSuffix "-" }}
{{- end }}
{{- end }}

{{/*
Chart label
*/}}
{{- define "document-platform.chart" -}}
{{- printf "%s-%s" .Chart.Name .Chart.Version | replace "+" "_" | trunc 63 | trimSuffix "-" }}
{{- end }}

{{/*
Common labels
*/}}
{{- define "document-platform.labels" -}}
helm.sh/chart: {{ include "document-platform.chart" . }}
app.kubernetes.io/managed-by: {{ .Release.Service }}
app.kubernetes.io/instance: {{ .Release.Name }}
{{- end }}

{{/*
Web selector labels
*/}}
{{- define "document-platform.web.selectorLabels" -}}
app.kubernetes.io/name: {{ include "document-platform.name" . }}-web
app.kubernetes.io/instance: {{ .Release.Name }}
{{- end }}

{{/*
Mermaid selector labels
*/}}
{{- define "document-platform.mermaid.selectorLabels" -}}
app.kubernetes.io/name: {{ include "document-platform.name" . }}-mermaid
app.kubernetes.io/instance: {{ .Release.Name }}
{{- end }}

{{/*
Service account name
*/}}
{{- define "document-platform.serviceAccountName" -}}
{{- if .Values.serviceAccount.create }}
{{- default (include "document-platform.fullname" .) .Values.serviceAccount.name }}
{{- else }}
{{- default "default" .Values.serviceAccount.name }}
{{- end }}
{{- end }}

{{/*
Secret name — either the user-provided existing secret or the one we create.
*/}}
{{- define "document-platform.secretName" -}}
{{- if .Values.secrets.existingSecret }}
{{- .Values.secrets.existingSecret }}
{{- else }}
{{- include "document-platform.fullname" . }}
{{- end }}
{{- end }}

{{/*
Mermaid editor service URL used by the Next.js rewrite proxy.
*/}}
{{- define "document-platform.mermaidEditorUrl" -}}
{{- printf "http://%s-mermaid:%d" (include "document-platform.fullname" .) (.Values.mermaid.service.port | int) }}
{{- end }}

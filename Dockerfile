FROM httpd:2.4.58-alpine

# Remove default site
RUN rm -rf /usr/local/apache2/htdocs/*

# Copy website
COPY site/ /usr/local/apache2/htdocs/

# Expose port
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=5s --retries=3 \
  CMD wget -qO- http://localhost:80 || exit 1

CMD ["httpd-foreground"]
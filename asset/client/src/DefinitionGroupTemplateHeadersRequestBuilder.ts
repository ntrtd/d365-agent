/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeSerializers,
  DefaultDeSerializers,
  DeleteRequestBuilder,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder,
  UpdateRequestBuilder
} from '@sap-cloud-sdk/odata-v4';
import { DefinitionGroupTemplateHeaders } from './DefinitionGroupTemplateHeaders';

/**
 * Request builder class for operations supported on the {@link DefinitionGroupTemplateHeaders} entity.
 */
export class DefinitionGroupTemplateHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DefinitionGroupTemplateHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `DefinitionGroupTemplateHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `DefinitionGroupTemplateHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<DefinitionGroupTemplateHeaders<T>, T> {
    return new GetAllRequestBuilder<DefinitionGroupTemplateHeaders<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DefinitionGroupTemplateHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DefinitionGroupTemplateHeaders`.
   */
  create(
    entity: DefinitionGroupTemplateHeaders<T>
  ): CreateRequestBuilder<DefinitionGroupTemplateHeaders<T>, T> {
    return new CreateRequestBuilder<DefinitionGroupTemplateHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DefinitionGroupTemplateHeaders` entity based on its keys.
   * @param templateId Key property. See {@link DefinitionGroupTemplateHeaders.templateId}.
   * @returns A request builder for creating requests to retrieve one `DefinitionGroupTemplateHeaders` entity based on its keys.
   */
  getByKey(
    templateId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DefinitionGroupTemplateHeaders<T>, T> {
    return new GetByKeyRequestBuilder<DefinitionGroupTemplateHeaders<T>, T>(
      this.entityApi,
      { TemplateId: templateId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DefinitionGroupTemplateHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DefinitionGroupTemplateHeaders`.
   */
  update(
    entity: DefinitionGroupTemplateHeaders<T>
  ): UpdateRequestBuilder<DefinitionGroupTemplateHeaders<T>, T> {
    return new UpdateRequestBuilder<DefinitionGroupTemplateHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DefinitionGroupTemplateHeaders`.
   * @param templateId Key property. See {@link DefinitionGroupTemplateHeaders.templateId}.
   * @returns A request builder for creating requests that delete an entity of type `DefinitionGroupTemplateHeaders`.
   */
  delete(
    templateId: string
  ): DeleteRequestBuilder<DefinitionGroupTemplateHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DefinitionGroupTemplateHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DefinitionGroupTemplateHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: DefinitionGroupTemplateHeaders<T>
  ): DeleteRequestBuilder<DefinitionGroupTemplateHeaders<T>, T>;
  delete(
    templateIdOrEntity: any
  ): DeleteRequestBuilder<DefinitionGroupTemplateHeaders<T>, T> {
    return new DeleteRequestBuilder<DefinitionGroupTemplateHeaders<T>, T>(
      this.entityApi,
      templateIdOrEntity instanceof DefinitionGroupTemplateHeaders
        ? templateIdOrEntity
        : { TemplateId: templateIdOrEntity! }
    );
  }
}

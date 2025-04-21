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
import { DefinitionGroupTemplateLines } from './DefinitionGroupTemplateLines';

/**
 * Request builder class for operations supported on the {@link DefinitionGroupTemplateLines} entity.
 */
export class DefinitionGroupTemplateLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DefinitionGroupTemplateLines<T>, T> {
  /**
   * Returns a request builder for querying all `DefinitionGroupTemplateLines` entities.
   * @returns A request builder for creating requests to retrieve all `DefinitionGroupTemplateLines` entities.
   */
  getAll(): GetAllRequestBuilder<DefinitionGroupTemplateLines<T>, T> {
    return new GetAllRequestBuilder<DefinitionGroupTemplateLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DefinitionGroupTemplateLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DefinitionGroupTemplateLines`.
   */
  create(
    entity: DefinitionGroupTemplateLines<T>
  ): CreateRequestBuilder<DefinitionGroupTemplateLines<T>, T> {
    return new CreateRequestBuilder<DefinitionGroupTemplateLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DefinitionGroupTemplateLines` entity based on its keys.
   * @param templateId Key property. See {@link DefinitionGroupTemplateLines.templateId}.
   * @param entity Key property. See {@link DefinitionGroupTemplateLines.entity}.
   * @returns A request builder for creating requests to retrieve one `DefinitionGroupTemplateLines` entity based on its keys.
   */
  getByKey(
    templateId: DeserializedType<T, 'Edm.String'>,
    entity: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DefinitionGroupTemplateLines<T>, T> {
    return new GetByKeyRequestBuilder<DefinitionGroupTemplateLines<T>, T>(
      this.entityApi,
      {
        TemplateId: templateId,
        Entity: entity
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DefinitionGroupTemplateLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DefinitionGroupTemplateLines`.
   */
  update(
    entity: DefinitionGroupTemplateLines<T>
  ): UpdateRequestBuilder<DefinitionGroupTemplateLines<T>, T> {
    return new UpdateRequestBuilder<DefinitionGroupTemplateLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DefinitionGroupTemplateLines`.
   * @param templateId Key property. See {@link DefinitionGroupTemplateLines.templateId}.
   * @param entity Key property. See {@link DefinitionGroupTemplateLines.entity}.
   * @returns A request builder for creating requests that delete an entity of type `DefinitionGroupTemplateLines`.
   */
  delete(
    templateId: string,
    entity: string
  ): DeleteRequestBuilder<DefinitionGroupTemplateLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DefinitionGroupTemplateLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DefinitionGroupTemplateLines` by taking the entity as a parameter.
   */
  delete(
    entity: DefinitionGroupTemplateLines<T>
  ): DeleteRequestBuilder<DefinitionGroupTemplateLines<T>, T>;
  delete(
    templateIdOrEntity: any,
    entity?: string
  ): DeleteRequestBuilder<DefinitionGroupTemplateLines<T>, T> {
    return new DeleteRequestBuilder<DefinitionGroupTemplateLines<T>, T>(
      this.entityApi,
      templateIdOrEntity instanceof DefinitionGroupTemplateLines
        ? templateIdOrEntity
        : {
            TemplateId: templateIdOrEntity!,
            Entity: entity!
          }
    );
  }
}

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
import { JourneyTemplateHeaders } from './JourneyTemplateHeaders';

/**
 * Request builder class for operations supported on the {@link JourneyTemplateHeaders} entity.
 */
export class JourneyTemplateHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<JourneyTemplateHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `JourneyTemplateHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `JourneyTemplateHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<JourneyTemplateHeaders<T>, T> {
    return new GetAllRequestBuilder<JourneyTemplateHeaders<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `JourneyTemplateHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `JourneyTemplateHeaders`.
   */
  create(
    entity: JourneyTemplateHeaders<T>
  ): CreateRequestBuilder<JourneyTemplateHeaders<T>, T> {
    return new CreateRequestBuilder<JourneyTemplateHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `JourneyTemplateHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link JourneyTemplateHeaders.dataAreaId}.
   * @param templateId Key property. See {@link JourneyTemplateHeaders.templateId}.
   * @returns A request builder for creating requests to retrieve one `JourneyTemplateHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    templateId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<JourneyTemplateHeaders<T>, T> {
    return new GetByKeyRequestBuilder<JourneyTemplateHeaders<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TemplateId: templateId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `JourneyTemplateHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `JourneyTemplateHeaders`.
   */
  update(
    entity: JourneyTemplateHeaders<T>
  ): UpdateRequestBuilder<JourneyTemplateHeaders<T>, T> {
    return new UpdateRequestBuilder<JourneyTemplateHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `JourneyTemplateHeaders`.
   * @param dataAreaId Key property. See {@link JourneyTemplateHeaders.dataAreaId}.
   * @param templateId Key property. See {@link JourneyTemplateHeaders.templateId}.
   * @returns A request builder for creating requests that delete an entity of type `JourneyTemplateHeaders`.
   */
  delete(
    dataAreaId: string,
    templateId: string
  ): DeleteRequestBuilder<JourneyTemplateHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `JourneyTemplateHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `JourneyTemplateHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: JourneyTemplateHeaders<T>
  ): DeleteRequestBuilder<JourneyTemplateHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    templateId?: string
  ): DeleteRequestBuilder<JourneyTemplateHeaders<T>, T> {
    return new DeleteRequestBuilder<JourneyTemplateHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof JourneyTemplateHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TemplateId: templateId!
          }
    );
  }
}

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
import { JourneyTemplateLines } from './JourneyTemplateLines';

/**
 * Request builder class for operations supported on the {@link JourneyTemplateLines} entity.
 */
export class JourneyTemplateLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<JourneyTemplateLines<T>, T> {
  /**
   * Returns a request builder for querying all `JourneyTemplateLines` entities.
   * @returns A request builder for creating requests to retrieve all `JourneyTemplateLines` entities.
   */
  getAll(): GetAllRequestBuilder<JourneyTemplateLines<T>, T> {
    return new GetAllRequestBuilder<JourneyTemplateLines<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `JourneyTemplateLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `JourneyTemplateLines`.
   */
  create(
    entity: JourneyTemplateLines<T>
  ): CreateRequestBuilder<JourneyTemplateLines<T>, T> {
    return new CreateRequestBuilder<JourneyTemplateLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `JourneyTemplateLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link JourneyTemplateLines.dataAreaId}.
   * @param journeyTemplateId Key property. See {@link JourneyTemplateLines.journeyTemplateId}.
   * @param journeyLegId Key property. See {@link JourneyTemplateLines.journeyLegId}.
   * @returns A request builder for creating requests to retrieve one `JourneyTemplateLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    journeyTemplateId: DeserializedType<T, 'Edm.String'>,
    journeyLegId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<JourneyTemplateLines<T>, T> {
    return new GetByKeyRequestBuilder<JourneyTemplateLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        JourneyTemplateId: journeyTemplateId,
        JourneyLegId: journeyLegId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `JourneyTemplateLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `JourneyTemplateLines`.
   */
  update(
    entity: JourneyTemplateLines<T>
  ): UpdateRequestBuilder<JourneyTemplateLines<T>, T> {
    return new UpdateRequestBuilder<JourneyTemplateLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `JourneyTemplateLines`.
   * @param dataAreaId Key property. See {@link JourneyTemplateLines.dataAreaId}.
   * @param journeyTemplateId Key property. See {@link JourneyTemplateLines.journeyTemplateId}.
   * @param journeyLegId Key property. See {@link JourneyTemplateLines.journeyLegId}.
   * @returns A request builder for creating requests that delete an entity of type `JourneyTemplateLines`.
   */
  delete(
    dataAreaId: string,
    journeyTemplateId: string,
    journeyLegId: string
  ): DeleteRequestBuilder<JourneyTemplateLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `JourneyTemplateLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `JourneyTemplateLines` by taking the entity as a parameter.
   */
  delete(
    entity: JourneyTemplateLines<T>
  ): DeleteRequestBuilder<JourneyTemplateLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    journeyTemplateId?: string,
    journeyLegId?: string
  ): DeleteRequestBuilder<JourneyTemplateLines<T>, T> {
    return new DeleteRequestBuilder<JourneyTemplateLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof JourneyTemplateLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JourneyTemplateId: journeyTemplateId!,
            JourneyLegId: journeyLegId!
          }
    );
  }
}

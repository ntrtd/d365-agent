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
import { JourneyLegTables } from './JourneyLegTables';

/**
 * Request builder class for operations supported on the {@link JourneyLegTables} entity.
 */
export class JourneyLegTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<JourneyLegTables<T>, T> {
  /**
   * Returns a request builder for querying all `JourneyLegTables` entities.
   * @returns A request builder for creating requests to retrieve all `JourneyLegTables` entities.
   */
  getAll(): GetAllRequestBuilder<JourneyLegTables<T>, T> {
    return new GetAllRequestBuilder<JourneyLegTables<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `JourneyLegTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `JourneyLegTables`.
   */
  create(
    entity: JourneyLegTables<T>
  ): CreateRequestBuilder<JourneyLegTables<T>, T> {
    return new CreateRequestBuilder<JourneyLegTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `JourneyLegTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link JourneyLegTables.dataAreaId}.
   * @param legId Key property. See {@link JourneyLegTables.legId}.
   * @returns A request builder for creating requests to retrieve one `JourneyLegTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    legId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<JourneyLegTables<T>, T> {
    return new GetByKeyRequestBuilder<JourneyLegTables<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      LegId: legId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `JourneyLegTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `JourneyLegTables`.
   */
  update(
    entity: JourneyLegTables<T>
  ): UpdateRequestBuilder<JourneyLegTables<T>, T> {
    return new UpdateRequestBuilder<JourneyLegTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `JourneyLegTables`.
   * @param dataAreaId Key property. See {@link JourneyLegTables.dataAreaId}.
   * @param legId Key property. See {@link JourneyLegTables.legId}.
   * @returns A request builder for creating requests that delete an entity of type `JourneyLegTables`.
   */
  delete(
    dataAreaId: string,
    legId: string
  ): DeleteRequestBuilder<JourneyLegTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `JourneyLegTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `JourneyLegTables` by taking the entity as a parameter.
   */
  delete(
    entity: JourneyLegTables<T>
  ): DeleteRequestBuilder<JourneyLegTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    legId?: string
  ): DeleteRequestBuilder<JourneyLegTables<T>, T> {
    return new DeleteRequestBuilder<JourneyLegTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof JourneyLegTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LegId: legId!
          }
    );
  }
}

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
import { RDeferralsBookTables } from './RDeferralsBookTables';

/**
 * Request builder class for operations supported on the {@link RDeferralsBookTables} entity.
 */
export class RDeferralsBookTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RDeferralsBookTables<T>, T> {
  /**
   * Returns a request builder for querying all `RDeferralsBookTables` entities.
   * @returns A request builder for creating requests to retrieve all `RDeferralsBookTables` entities.
   */
  getAll(): GetAllRequestBuilder<RDeferralsBookTables<T>, T> {
    return new GetAllRequestBuilder<RDeferralsBookTables<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RDeferralsBookTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RDeferralsBookTables`.
   */
  create(
    entity: RDeferralsBookTables<T>
  ): CreateRequestBuilder<RDeferralsBookTables<T>, T> {
    return new CreateRequestBuilder<RDeferralsBookTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RDeferralsBookTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link RDeferralsBookTables.dataAreaId}.
   * @param modelNumber Key property. See {@link RDeferralsBookTables.modelNumber}.
   * @returns A request builder for creating requests to retrieve one `RDeferralsBookTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    modelNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RDeferralsBookTables<T>, T> {
    return new GetByKeyRequestBuilder<RDeferralsBookTables<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ModelNumber: modelNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RDeferralsBookTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RDeferralsBookTables`.
   */
  update(
    entity: RDeferralsBookTables<T>
  ): UpdateRequestBuilder<RDeferralsBookTables<T>, T> {
    return new UpdateRequestBuilder<RDeferralsBookTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RDeferralsBookTables`.
   * @param dataAreaId Key property. See {@link RDeferralsBookTables.dataAreaId}.
   * @param modelNumber Key property. See {@link RDeferralsBookTables.modelNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RDeferralsBookTables`.
   */
  delete(
    dataAreaId: string,
    modelNumber: string
  ): DeleteRequestBuilder<RDeferralsBookTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RDeferralsBookTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RDeferralsBookTables` by taking the entity as a parameter.
   */
  delete(
    entity: RDeferralsBookTables<T>
  ): DeleteRequestBuilder<RDeferralsBookTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    modelNumber?: string
  ): DeleteRequestBuilder<RDeferralsBookTables<T>, T> {
    return new DeleteRequestBuilder<RDeferralsBookTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RDeferralsBookTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ModelNumber: modelNumber!
          }
    );
  }
}

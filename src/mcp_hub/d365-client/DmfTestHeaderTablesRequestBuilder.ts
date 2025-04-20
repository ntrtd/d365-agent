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
import { DmfTestHeaderTables } from './DmfTestHeaderTables';

/**
 * Request builder class for operations supported on the {@link DmfTestHeaderTables} entity.
 */
export class DmfTestHeaderTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DmfTestHeaderTables<T>, T> {
  /**
   * Returns a request builder for querying all `DmfTestHeaderTables` entities.
   * @returns A request builder for creating requests to retrieve all `DmfTestHeaderTables` entities.
   */
  getAll(): GetAllRequestBuilder<DmfTestHeaderTables<T>, T> {
    return new GetAllRequestBuilder<DmfTestHeaderTables<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `DmfTestHeaderTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DmfTestHeaderTables`.
   */
  create(
    entity: DmfTestHeaderTables<T>
  ): CreateRequestBuilder<DmfTestHeaderTables<T>, T> {
    return new CreateRequestBuilder<DmfTestHeaderTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DmfTestHeaderTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link DmfTestHeaderTables.dataAreaId}.
   * @param headerId Key property. See {@link DmfTestHeaderTables.headerId}.
   * @returns A request builder for creating requests to retrieve one `DmfTestHeaderTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    headerId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DmfTestHeaderTables<T>, T> {
    return new GetByKeyRequestBuilder<DmfTestHeaderTables<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        HeaderId: headerId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DmfTestHeaderTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DmfTestHeaderTables`.
   */
  update(
    entity: DmfTestHeaderTables<T>
  ): UpdateRequestBuilder<DmfTestHeaderTables<T>, T> {
    return new UpdateRequestBuilder<DmfTestHeaderTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DmfTestHeaderTables`.
   * @param dataAreaId Key property. See {@link DmfTestHeaderTables.dataAreaId}.
   * @param headerId Key property. See {@link DmfTestHeaderTables.headerId}.
   * @returns A request builder for creating requests that delete an entity of type `DmfTestHeaderTables`.
   */
  delete(
    dataAreaId: string,
    headerId: string
  ): DeleteRequestBuilder<DmfTestHeaderTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DmfTestHeaderTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DmfTestHeaderTables` by taking the entity as a parameter.
   */
  delete(
    entity: DmfTestHeaderTables<T>
  ): DeleteRequestBuilder<DmfTestHeaderTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    headerId?: string
  ): DeleteRequestBuilder<DmfTestHeaderTables<T>, T> {
    return new DeleteRequestBuilder<DmfTestHeaderTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DmfTestHeaderTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            HeaderId: headerId!
          }
    );
  }
}

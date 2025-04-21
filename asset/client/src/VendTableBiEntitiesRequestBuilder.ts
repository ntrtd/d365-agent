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
import { VendTableBiEntities } from './VendTableBiEntities';

/**
 * Request builder class for operations supported on the {@link VendTableBiEntities} entity.
 */
export class VendTableBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendTableBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `VendTableBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `VendTableBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<VendTableBiEntities<T>, T> {
    return new GetAllRequestBuilder<VendTableBiEntities<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `VendTableBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendTableBiEntities`.
   */
  create(
    entity: VendTableBiEntities<T>
  ): CreateRequestBuilder<VendTableBiEntities<T>, T> {
    return new CreateRequestBuilder<VendTableBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VendTableBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link VendTableBiEntities.dataAreaId}.
   * @param accountNum Key property. See {@link VendTableBiEntities.accountNum}.
   * @returns A request builder for creating requests to retrieve one `VendTableBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    accountNum: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<VendTableBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<VendTableBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        AccountNum: accountNum
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `VendTableBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendTableBiEntities`.
   */
  update(
    entity: VendTableBiEntities<T>
  ): UpdateRequestBuilder<VendTableBiEntities<T>, T> {
    return new UpdateRequestBuilder<VendTableBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VendTableBiEntities`.
   * @param dataAreaId Key property. See {@link VendTableBiEntities.dataAreaId}.
   * @param accountNum Key property. See {@link VendTableBiEntities.accountNum}.
   * @returns A request builder for creating requests that delete an entity of type `VendTableBiEntities`.
   */
  delete(
    dataAreaId: string,
    accountNum: string
  ): DeleteRequestBuilder<VendTableBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendTableBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendTableBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: VendTableBiEntities<T>
  ): DeleteRequestBuilder<VendTableBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    accountNum?: string
  ): DeleteRequestBuilder<VendTableBiEntities<T>, T> {
    return new DeleteRequestBuilder<VendTableBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VendTableBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            AccountNum: accountNum!
          }
    );
  }
}

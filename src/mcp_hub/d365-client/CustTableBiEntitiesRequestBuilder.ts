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
import { CustTableBiEntities } from './CustTableBiEntities';

/**
 * Request builder class for operations supported on the {@link CustTableBiEntities} entity.
 */
export class CustTableBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustTableBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `CustTableBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `CustTableBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<CustTableBiEntities<T>, T> {
    return new GetAllRequestBuilder<CustTableBiEntities<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CustTableBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustTableBiEntities`.
   */
  create(
    entity: CustTableBiEntities<T>
  ): CreateRequestBuilder<CustTableBiEntities<T>, T> {
    return new CreateRequestBuilder<CustTableBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CustTableBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link CustTableBiEntities.dataAreaId}.
   * @param accountNum Key property. See {@link CustTableBiEntities.accountNum}.
   * @returns A request builder for creating requests to retrieve one `CustTableBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    accountNum: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CustTableBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<CustTableBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        AccountNum: accountNum
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CustTableBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustTableBiEntities`.
   */
  update(
    entity: CustTableBiEntities<T>
  ): UpdateRequestBuilder<CustTableBiEntities<T>, T> {
    return new UpdateRequestBuilder<CustTableBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CustTableBiEntities`.
   * @param dataAreaId Key property. See {@link CustTableBiEntities.dataAreaId}.
   * @param accountNum Key property. See {@link CustTableBiEntities.accountNum}.
   * @returns A request builder for creating requests that delete an entity of type `CustTableBiEntities`.
   */
  delete(
    dataAreaId: string,
    accountNum: string
  ): DeleteRequestBuilder<CustTableBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustTableBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustTableBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: CustTableBiEntities<T>
  ): DeleteRequestBuilder<CustTableBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    accountNum?: string
  ): DeleteRequestBuilder<CustTableBiEntities<T>, T> {
    return new DeleteRequestBuilder<CustTableBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CustTableBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            AccountNum: accountNum!
          }
    );
  }
}

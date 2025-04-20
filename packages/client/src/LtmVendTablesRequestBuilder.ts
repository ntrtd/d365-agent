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
import { LtmVendTables } from './LtmVendTables';

/**
 * Request builder class for operations supported on the {@link LtmVendTables} entity.
 */
export class LtmVendTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LtmVendTables<T>, T> {
  /**
   * Returns a request builder for querying all `LtmVendTables` entities.
   * @returns A request builder for creating requests to retrieve all `LtmVendTables` entities.
   */
  getAll(): GetAllRequestBuilder<LtmVendTables<T>, T> {
    return new GetAllRequestBuilder<LtmVendTables<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LtmVendTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LtmVendTables`.
   */
  create(entity: LtmVendTables<T>): CreateRequestBuilder<LtmVendTables<T>, T> {
    return new CreateRequestBuilder<LtmVendTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LtmVendTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link LtmVendTables.dataAreaId}.
   * @param accountNum Key property. See {@link LtmVendTables.accountNum}.
   * @returns A request builder for creating requests to retrieve one `LtmVendTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    accountNum: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LtmVendTables<T>, T> {
    return new GetByKeyRequestBuilder<LtmVendTables<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      AccountNum: accountNum
    });
  }

  /**
   * Returns a request builder for updating an entity of type `LtmVendTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LtmVendTables`.
   */
  update(entity: LtmVendTables<T>): UpdateRequestBuilder<LtmVendTables<T>, T> {
    return new UpdateRequestBuilder<LtmVendTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LtmVendTables`.
   * @param dataAreaId Key property. See {@link LtmVendTables.dataAreaId}.
   * @param accountNum Key property. See {@link LtmVendTables.accountNum}.
   * @returns A request builder for creating requests that delete an entity of type `LtmVendTables`.
   */
  delete(
    dataAreaId: string,
    accountNum: string
  ): DeleteRequestBuilder<LtmVendTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LtmVendTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LtmVendTables` by taking the entity as a parameter.
   */
  delete(entity: LtmVendTables<T>): DeleteRequestBuilder<LtmVendTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    accountNum?: string
  ): DeleteRequestBuilder<LtmVendTables<T>, T> {
    return new DeleteRequestBuilder<LtmVendTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LtmVendTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            AccountNum: accountNum!
          }
    );
  }
}

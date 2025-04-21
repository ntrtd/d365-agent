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
import { LtmCustTables } from './LtmCustTables';

/**
 * Request builder class for operations supported on the {@link LtmCustTables} entity.
 */
export class LtmCustTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LtmCustTables<T>, T> {
  /**
   * Returns a request builder for querying all `LtmCustTables` entities.
   * @returns A request builder for creating requests to retrieve all `LtmCustTables` entities.
   */
  getAll(): GetAllRequestBuilder<LtmCustTables<T>, T> {
    return new GetAllRequestBuilder<LtmCustTables<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LtmCustTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LtmCustTables`.
   */
  create(entity: LtmCustTables<T>): CreateRequestBuilder<LtmCustTables<T>, T> {
    return new CreateRequestBuilder<LtmCustTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LtmCustTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link LtmCustTables.dataAreaId}.
   * @param accountNum Key property. See {@link LtmCustTables.accountNum}.
   * @returns A request builder for creating requests to retrieve one `LtmCustTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    accountNum: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LtmCustTables<T>, T> {
    return new GetByKeyRequestBuilder<LtmCustTables<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      AccountNum: accountNum
    });
  }

  /**
   * Returns a request builder for updating an entity of type `LtmCustTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LtmCustTables`.
   */
  update(entity: LtmCustTables<T>): UpdateRequestBuilder<LtmCustTables<T>, T> {
    return new UpdateRequestBuilder<LtmCustTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LtmCustTables`.
   * @param dataAreaId Key property. See {@link LtmCustTables.dataAreaId}.
   * @param accountNum Key property. See {@link LtmCustTables.accountNum}.
   * @returns A request builder for creating requests that delete an entity of type `LtmCustTables`.
   */
  delete(
    dataAreaId: string,
    accountNum: string
  ): DeleteRequestBuilder<LtmCustTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LtmCustTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LtmCustTables` by taking the entity as a parameter.
   */
  delete(entity: LtmCustTables<T>): DeleteRequestBuilder<LtmCustTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    accountNum?: string
  ): DeleteRequestBuilder<LtmCustTables<T>, T> {
    return new DeleteRequestBuilder<LtmCustTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LtmCustTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            AccountNum: accountNum!
          }
    );
  }
}

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
import { ZakatLedgerItemCodes } from './ZakatLedgerItemCodes';

/**
 * Request builder class for operations supported on the {@link ZakatLedgerItemCodes} entity.
 */
export class ZakatLedgerItemCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ZakatLedgerItemCodes<T>, T> {
  /**
   * Returns a request builder for querying all `ZakatLedgerItemCodes` entities.
   * @returns A request builder for creating requests to retrieve all `ZakatLedgerItemCodes` entities.
   */
  getAll(): GetAllRequestBuilder<ZakatLedgerItemCodes<T>, T> {
    return new GetAllRequestBuilder<ZakatLedgerItemCodes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ZakatLedgerItemCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ZakatLedgerItemCodes`.
   */
  create(
    entity: ZakatLedgerItemCodes<T>
  ): CreateRequestBuilder<ZakatLedgerItemCodes<T>, T> {
    return new CreateRequestBuilder<ZakatLedgerItemCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ZakatLedgerItemCodes` entity based on its keys.
   * @param dataAreaId Key property. See {@link ZakatLedgerItemCodes.dataAreaId}.
   * @param itemCode Key property. See {@link ZakatLedgerItemCodes.itemCode}.
   * @returns A request builder for creating requests to retrieve one `ZakatLedgerItemCodes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    itemCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ZakatLedgerItemCodes<T>, T> {
    return new GetByKeyRequestBuilder<ZakatLedgerItemCodes<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ItemCode: itemCode
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ZakatLedgerItemCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ZakatLedgerItemCodes`.
   */
  update(
    entity: ZakatLedgerItemCodes<T>
  ): UpdateRequestBuilder<ZakatLedgerItemCodes<T>, T> {
    return new UpdateRequestBuilder<ZakatLedgerItemCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ZakatLedgerItemCodes`.
   * @param dataAreaId Key property. See {@link ZakatLedgerItemCodes.dataAreaId}.
   * @param itemCode Key property. See {@link ZakatLedgerItemCodes.itemCode}.
   * @returns A request builder for creating requests that delete an entity of type `ZakatLedgerItemCodes`.
   */
  delete(
    dataAreaId: string,
    itemCode: string
  ): DeleteRequestBuilder<ZakatLedgerItemCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ZakatLedgerItemCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ZakatLedgerItemCodes` by taking the entity as a parameter.
   */
  delete(
    entity: ZakatLedgerItemCodes<T>
  ): DeleteRequestBuilder<ZakatLedgerItemCodes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    itemCode?: string
  ): DeleteRequestBuilder<ZakatLedgerItemCodes<T>, T> {
    return new DeleteRequestBuilder<ZakatLedgerItemCodes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ZakatLedgerItemCodes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ItemCode: itemCode!
          }
    );
  }
}

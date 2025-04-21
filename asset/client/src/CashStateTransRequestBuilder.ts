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
import { CashStateTrans } from './CashStateTrans';

/**
 * Request builder class for operations supported on the {@link CashStateTrans} entity.
 */
export class CashStateTransRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CashStateTrans<T>, T> {
  /**
   * Returns a request builder for querying all `CashStateTrans` entities.
   * @returns A request builder for creating requests to retrieve all `CashStateTrans` entities.
   */
  getAll(): GetAllRequestBuilder<CashStateTrans<T>, T> {
    return new GetAllRequestBuilder<CashStateTrans<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CashStateTrans` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CashStateTrans`.
   */
  create(
    entity: CashStateTrans<T>
  ): CreateRequestBuilder<CashStateTrans<T>, T> {
    return new CreateRequestBuilder<CashStateTrans<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CashStateTrans` entity based on its keys.
   * @param dataAreaId Key property. See {@link CashStateTrans.dataAreaId}.
   * @param voucher Key property. See {@link CashStateTrans.voucher}.
   * @returns A request builder for creating requests to retrieve one `CashStateTrans` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    voucher: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CashStateTrans<T>, T> {
    return new GetByKeyRequestBuilder<CashStateTrans<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      Voucher: voucher
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CashStateTrans`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CashStateTrans`.
   */
  update(
    entity: CashStateTrans<T>
  ): UpdateRequestBuilder<CashStateTrans<T>, T> {
    return new UpdateRequestBuilder<CashStateTrans<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CashStateTrans`.
   * @param dataAreaId Key property. See {@link CashStateTrans.dataAreaId}.
   * @param voucher Key property. See {@link CashStateTrans.voucher}.
   * @returns A request builder for creating requests that delete an entity of type `CashStateTrans`.
   */
  delete(
    dataAreaId: string,
    voucher: string
  ): DeleteRequestBuilder<CashStateTrans<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CashStateTrans`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CashStateTrans` by taking the entity as a parameter.
   */
  delete(entity: CashStateTrans<T>): DeleteRequestBuilder<CashStateTrans<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    voucher?: string
  ): DeleteRequestBuilder<CashStateTrans<T>, T> {
    return new DeleteRequestBuilder<CashStateTrans<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CashStateTrans
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Voucher: voucher!
          }
    );
  }
}

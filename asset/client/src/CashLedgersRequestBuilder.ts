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
import { CashLedgers } from './CashLedgers';

/**
 * Request builder class for operations supported on the {@link CashLedgers} entity.
 */
export class CashLedgersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CashLedgers<T>, T> {
  /**
   * Returns a request builder for querying all `CashLedgers` entities.
   * @returns A request builder for creating requests to retrieve all `CashLedgers` entities.
   */
  getAll(): GetAllRequestBuilder<CashLedgers<T>, T> {
    return new GetAllRequestBuilder<CashLedgers<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CashLedgers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CashLedgers`.
   */
  create(entity: CashLedgers<T>): CreateRequestBuilder<CashLedgers<T>, T> {
    return new CreateRequestBuilder<CashLedgers<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `CashLedgers` entity based on its keys.
   * @param dataAreaId Key property. See {@link CashLedgers.dataAreaId}.
   * @param cashPosting Key property. See {@link CashLedgers.cashPosting}.
   * @param mainAccountIdDisplayValue Key property. See {@link CashLedgers.mainAccountIdDisplayValue}.
   * @param cash Key property. See {@link CashLedgers.cash}.
   * @returns A request builder for creating requests to retrieve one `CashLedgers` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    cashPosting: DeserializedType<T, 'Edm.String'>,
    mainAccountIdDisplayValue: DeserializedType<T, 'Edm.String'>,
    cash: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CashLedgers<T>, T> {
    return new GetByKeyRequestBuilder<CashLedgers<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      CashPosting: cashPosting,
      MainAccountIdDisplayValue: mainAccountIdDisplayValue,
      Cash: cash
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CashLedgers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CashLedgers`.
   */
  update(entity: CashLedgers<T>): UpdateRequestBuilder<CashLedgers<T>, T> {
    return new UpdateRequestBuilder<CashLedgers<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CashLedgers`.
   * @param dataAreaId Key property. See {@link CashLedgers.dataAreaId}.
   * @param cashPosting Key property. See {@link CashLedgers.cashPosting}.
   * @param mainAccountIdDisplayValue Key property. See {@link CashLedgers.mainAccountIdDisplayValue}.
   * @param cash Key property. See {@link CashLedgers.cash}.
   * @returns A request builder for creating requests that delete an entity of type `CashLedgers`.
   */
  delete(
    dataAreaId: string,
    cashPosting: string,
    mainAccountIdDisplayValue: string,
    cash: string
  ): DeleteRequestBuilder<CashLedgers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CashLedgers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CashLedgers` by taking the entity as a parameter.
   */
  delete(entity: CashLedgers<T>): DeleteRequestBuilder<CashLedgers<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    cashPosting?: string,
    mainAccountIdDisplayValue?: string,
    cash?: string
  ): DeleteRequestBuilder<CashLedgers<T>, T> {
    return new DeleteRequestBuilder<CashLedgers<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CashLedgers
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CashPosting: cashPosting!,
            MainAccountIdDisplayValue: mainAccountIdDisplayValue!,
            Cash: cash!
          }
    );
  }
}

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
import { LedgerLiquidities } from './LedgerLiquidities';

/**
 * Request builder class for operations supported on the {@link LedgerLiquidities} entity.
 */
export class LedgerLiquiditiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LedgerLiquidities<T>, T> {
  /**
   * Returns a request builder for querying all `LedgerLiquidities` entities.
   * @returns A request builder for creating requests to retrieve all `LedgerLiquidities` entities.
   */
  getAll(): GetAllRequestBuilder<LedgerLiquidities<T>, T> {
    return new GetAllRequestBuilder<LedgerLiquidities<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LedgerLiquidities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LedgerLiquidities`.
   */
  create(
    entity: LedgerLiquidities<T>
  ): CreateRequestBuilder<LedgerLiquidities<T>, T> {
    return new CreateRequestBuilder<LedgerLiquidities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LedgerLiquidities` entity based on its keys.
   * @param dataAreaId Key property. See {@link LedgerLiquidities.dataAreaId}.
   * @param mainAccountId Key property. See {@link LedgerLiquidities.mainAccountId}.
   * @param chartOfAccountsName Key property. See {@link LedgerLiquidities.chartOfAccountsName}.
   * @returns A request builder for creating requests to retrieve one `LedgerLiquidities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    mainAccountId: DeserializedType<T, 'Edm.String'>,
    chartOfAccountsName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LedgerLiquidities<T>, T> {
    return new GetByKeyRequestBuilder<LedgerLiquidities<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      MainAccountId: mainAccountId,
      ChartOfAccountsName: chartOfAccountsName
    });
  }

  /**
   * Returns a request builder for updating an entity of type `LedgerLiquidities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LedgerLiquidities`.
   */
  update(
    entity: LedgerLiquidities<T>
  ): UpdateRequestBuilder<LedgerLiquidities<T>, T> {
    return new UpdateRequestBuilder<LedgerLiquidities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LedgerLiquidities`.
   * @param dataAreaId Key property. See {@link LedgerLiquidities.dataAreaId}.
   * @param mainAccountId Key property. See {@link LedgerLiquidities.mainAccountId}.
   * @param chartOfAccountsName Key property. See {@link LedgerLiquidities.chartOfAccountsName}.
   * @returns A request builder for creating requests that delete an entity of type `LedgerLiquidities`.
   */
  delete(
    dataAreaId: string,
    mainAccountId: string,
    chartOfAccountsName: string
  ): DeleteRequestBuilder<LedgerLiquidities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LedgerLiquidities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LedgerLiquidities` by taking the entity as a parameter.
   */
  delete(
    entity: LedgerLiquidities<T>
  ): DeleteRequestBuilder<LedgerLiquidities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    mainAccountId?: string,
    chartOfAccountsName?: string
  ): DeleteRequestBuilder<LedgerLiquidities<T>, T> {
    return new DeleteRequestBuilder<LedgerLiquidities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LedgerLiquidities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            MainAccountId: mainAccountId!,
            ChartOfAccountsName: chartOfAccountsName!
          }
    );
  }
}

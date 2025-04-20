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
import { BalanceControls } from './BalanceControls';

/**
 * Request builder class for operations supported on the {@link BalanceControls} entity.
 */
export class BalanceControlsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BalanceControls<T>, T> {
  /**
   * Returns a request builder for querying all `BalanceControls` entities.
   * @returns A request builder for creating requests to retrieve all `BalanceControls` entities.
   */
  getAll(): GetAllRequestBuilder<BalanceControls<T>, T> {
    return new GetAllRequestBuilder<BalanceControls<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BalanceControls` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BalanceControls`.
   */
  create(
    entity: BalanceControls<T>
  ): CreateRequestBuilder<BalanceControls<T>, T> {
    return new CreateRequestBuilder<BalanceControls<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BalanceControls` entity based on its keys.
   * @param dataAreaId Key property. See {@link BalanceControls.dataAreaId}.
   * @param mainAccountId Key property. See {@link BalanceControls.mainAccountId}.
   * @param chartOfAccounts Key property. See {@link BalanceControls.chartOfAccounts}.
   * @returns A request builder for creating requests to retrieve one `BalanceControls` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    mainAccountId: DeserializedType<T, 'Edm.String'>,
    chartOfAccounts: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BalanceControls<T>, T> {
    return new GetByKeyRequestBuilder<BalanceControls<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      MainAccountId: mainAccountId,
      ChartOfAccounts: chartOfAccounts
    });
  }

  /**
   * Returns a request builder for updating an entity of type `BalanceControls`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BalanceControls`.
   */
  update(
    entity: BalanceControls<T>
  ): UpdateRequestBuilder<BalanceControls<T>, T> {
    return new UpdateRequestBuilder<BalanceControls<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BalanceControls`.
   * @param dataAreaId Key property. See {@link BalanceControls.dataAreaId}.
   * @param mainAccountId Key property. See {@link BalanceControls.mainAccountId}.
   * @param chartOfAccounts Key property. See {@link BalanceControls.chartOfAccounts}.
   * @returns A request builder for creating requests that delete an entity of type `BalanceControls`.
   */
  delete(
    dataAreaId: string,
    mainAccountId: string,
    chartOfAccounts: string
  ): DeleteRequestBuilder<BalanceControls<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BalanceControls`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BalanceControls` by taking the entity as a parameter.
   */
  delete(
    entity: BalanceControls<T>
  ): DeleteRequestBuilder<BalanceControls<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    mainAccountId?: string,
    chartOfAccounts?: string
  ): DeleteRequestBuilder<BalanceControls<T>, T> {
    return new DeleteRequestBuilder<BalanceControls<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BalanceControls
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            MainAccountId: mainAccountId!,
            ChartOfAccounts: chartOfAccounts!
          }
    );
  }
}

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
import { CashFlowMgmtJourNameBalanceControls } from './CashFlowMgmtJourNameBalanceControls';

/**
 * Request builder class for operations supported on the {@link CashFlowMgmtJourNameBalanceControls} entity.
 */
export class CashFlowMgmtJourNameBalanceControlsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CashFlowMgmtJourNameBalanceControls<T>, T> {
  /**
   * Returns a request builder for querying all `CashFlowMgmtJourNameBalanceControls` entities.
   * @returns A request builder for creating requests to retrieve all `CashFlowMgmtJourNameBalanceControls` entities.
   */
  getAll(): GetAllRequestBuilder<CashFlowMgmtJourNameBalanceControls<T>, T> {
    return new GetAllRequestBuilder<CashFlowMgmtJourNameBalanceControls<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CashFlowMgmtJourNameBalanceControls` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CashFlowMgmtJourNameBalanceControls`.
   */
  create(
    entity: CashFlowMgmtJourNameBalanceControls<T>
  ): CreateRequestBuilder<CashFlowMgmtJourNameBalanceControls<T>, T> {
    return new CreateRequestBuilder<CashFlowMgmtJourNameBalanceControls<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CashFlowMgmtJourNameBalanceControls` entity based on its keys.
   * @param name Key property. See {@link CashFlowMgmtJourNameBalanceControls.name}.
   * @param currency Key property. See {@link CashFlowMgmtJourNameBalanceControls.currency}.
   * @returns A request builder for creating requests to retrieve one `CashFlowMgmtJourNameBalanceControls` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>,
    currency: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CashFlowMgmtJourNameBalanceControls<T>, T> {
    return new GetByKeyRequestBuilder<
      CashFlowMgmtJourNameBalanceControls<T>,
      T
    >(this.entityApi, {
      Name: name,
      Currency: currency
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CashFlowMgmtJourNameBalanceControls`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CashFlowMgmtJourNameBalanceControls`.
   */
  update(
    entity: CashFlowMgmtJourNameBalanceControls<T>
  ): UpdateRequestBuilder<CashFlowMgmtJourNameBalanceControls<T>, T> {
    return new UpdateRequestBuilder<CashFlowMgmtJourNameBalanceControls<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CashFlowMgmtJourNameBalanceControls`.
   * @param name Key property. See {@link CashFlowMgmtJourNameBalanceControls.name}.
   * @param currency Key property. See {@link CashFlowMgmtJourNameBalanceControls.currency}.
   * @returns A request builder for creating requests that delete an entity of type `CashFlowMgmtJourNameBalanceControls`.
   */
  delete(
    name: string,
    currency: string
  ): DeleteRequestBuilder<CashFlowMgmtJourNameBalanceControls<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CashFlowMgmtJourNameBalanceControls`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CashFlowMgmtJourNameBalanceControls` by taking the entity as a parameter.
   */
  delete(
    entity: CashFlowMgmtJourNameBalanceControls<T>
  ): DeleteRequestBuilder<CashFlowMgmtJourNameBalanceControls<T>, T>;
  delete(
    nameOrEntity: any,
    currency?: string
  ): DeleteRequestBuilder<CashFlowMgmtJourNameBalanceControls<T>, T> {
    return new DeleteRequestBuilder<CashFlowMgmtJourNameBalanceControls<T>, T>(
      this.entityApi,
      nameOrEntity instanceof CashFlowMgmtJourNameBalanceControls
        ? nameOrEntity
        : {
            Name: nameOrEntity!,
            Currency: currency!
          }
    );
  }
}

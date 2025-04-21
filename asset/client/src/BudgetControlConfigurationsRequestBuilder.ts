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
import { BudgetControlConfigurations } from './BudgetControlConfigurations';
import { BudgetControlConfigurationStatus } from './BudgetControlConfigurationStatus';

/**
 * Request builder class for operations supported on the {@link BudgetControlConfigurations} entity.
 */
export class BudgetControlConfigurationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BudgetControlConfigurations<T>, T> {
  /**
   * Returns a request builder for querying all `BudgetControlConfigurations` entities.
   * @returns A request builder for creating requests to retrieve all `BudgetControlConfigurations` entities.
   */
  getAll(): GetAllRequestBuilder<BudgetControlConfigurations<T>, T> {
    return new GetAllRequestBuilder<BudgetControlConfigurations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BudgetControlConfigurations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BudgetControlConfigurations`.
   */
  create(
    entity: BudgetControlConfigurations<T>
  ): CreateRequestBuilder<BudgetControlConfigurations<T>, T> {
    return new CreateRequestBuilder<BudgetControlConfigurations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BudgetControlConfigurations` entity based on its keys.
   * @param dataAreaId Key property. See {@link BudgetControlConfigurations.dataAreaId}.
   * @param legalEntityId Key property. See {@link BudgetControlConfigurations.legalEntityId}.
   * @param status Key property. See {@link BudgetControlConfigurations.status}.
   * @returns A request builder for creating requests to retrieve one `BudgetControlConfigurations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    legalEntityId: DeserializedType<T, 'Edm.String'>,
    status: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.BudgetControlConfigurationStatus'
    >
  ): GetByKeyRequestBuilder<BudgetControlConfigurations<T>, T> {
    return new GetByKeyRequestBuilder<BudgetControlConfigurations<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        LegalEntityId: legalEntityId,
        Status: status
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BudgetControlConfigurations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BudgetControlConfigurations`.
   */
  update(
    entity: BudgetControlConfigurations<T>
  ): UpdateRequestBuilder<BudgetControlConfigurations<T>, T> {
    return new UpdateRequestBuilder<BudgetControlConfigurations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BudgetControlConfigurations`.
   * @param dataAreaId Key property. See {@link BudgetControlConfigurations.dataAreaId}.
   * @param legalEntityId Key property. See {@link BudgetControlConfigurations.legalEntityId}.
   * @param status Key property. See {@link BudgetControlConfigurations.status}.
   * @returns A request builder for creating requests that delete an entity of type `BudgetControlConfigurations`.
   */
  delete(
    dataAreaId: string,
    legalEntityId: string,
    status: BudgetControlConfigurationStatus
  ): DeleteRequestBuilder<BudgetControlConfigurations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BudgetControlConfigurations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BudgetControlConfigurations` by taking the entity as a parameter.
   */
  delete(
    entity: BudgetControlConfigurations<T>
  ): DeleteRequestBuilder<BudgetControlConfigurations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    legalEntityId?: string,
    status?: BudgetControlConfigurationStatus
  ): DeleteRequestBuilder<BudgetControlConfigurations<T>, T> {
    return new DeleteRequestBuilder<BudgetControlConfigurations<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BudgetControlConfigurations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LegalEntityId: legalEntityId!,
            Status: status!
          }
    );
  }
}

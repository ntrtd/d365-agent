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
import { BudgetControlConfigurationActivations } from './BudgetControlConfigurationActivations';

/**
 * Request builder class for operations supported on the {@link BudgetControlConfigurationActivations} entity.
 */
export class BudgetControlConfigurationActivationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BudgetControlConfigurationActivations<T>, T> {
  /**
   * Returns a request builder for querying all `BudgetControlConfigurationActivations` entities.
   * @returns A request builder for creating requests to retrieve all `BudgetControlConfigurationActivations` entities.
   */
  getAll(): GetAllRequestBuilder<BudgetControlConfigurationActivations<T>, T> {
    return new GetAllRequestBuilder<
      BudgetControlConfigurationActivations<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BudgetControlConfigurationActivations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BudgetControlConfigurationActivations`.
   */
  create(
    entity: BudgetControlConfigurationActivations<T>
  ): CreateRequestBuilder<BudgetControlConfigurationActivations<T>, T> {
    return new CreateRequestBuilder<
      BudgetControlConfigurationActivations<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `BudgetControlConfigurationActivations` entity based on its keys.
   * @param dataAreaId Key property. See {@link BudgetControlConfigurationActivations.dataAreaId}.
   * @param legalEntityId Key property. See {@link BudgetControlConfigurationActivations.legalEntityId}.
   * @returns A request builder for creating requests to retrieve one `BudgetControlConfigurationActivations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    legalEntityId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BudgetControlConfigurationActivations<T>, T> {
    return new GetByKeyRequestBuilder<
      BudgetControlConfigurationActivations<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      LegalEntityId: legalEntityId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `BudgetControlConfigurationActivations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BudgetControlConfigurationActivations`.
   */
  update(
    entity: BudgetControlConfigurationActivations<T>
  ): UpdateRequestBuilder<BudgetControlConfigurationActivations<T>, T> {
    return new UpdateRequestBuilder<
      BudgetControlConfigurationActivations<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `BudgetControlConfigurationActivations`.
   * @param dataAreaId Key property. See {@link BudgetControlConfigurationActivations.dataAreaId}.
   * @param legalEntityId Key property. See {@link BudgetControlConfigurationActivations.legalEntityId}.
   * @returns A request builder for creating requests that delete an entity of type `BudgetControlConfigurationActivations`.
   */
  delete(
    dataAreaId: string,
    legalEntityId: string
  ): DeleteRequestBuilder<BudgetControlConfigurationActivations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BudgetControlConfigurationActivations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BudgetControlConfigurationActivations` by taking the entity as a parameter.
   */
  delete(
    entity: BudgetControlConfigurationActivations<T>
  ): DeleteRequestBuilder<BudgetControlConfigurationActivations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    legalEntityId?: string
  ): DeleteRequestBuilder<BudgetControlConfigurationActivations<T>, T> {
    return new DeleteRequestBuilder<
      BudgetControlConfigurationActivations<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof BudgetControlConfigurationActivations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LegalEntityId: legalEntityId!
          }
    );
  }
}

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
import { DemandPlanningCustomerAccounts } from './DemandPlanningCustomerAccounts';

/**
 * Request builder class for operations supported on the {@link DemandPlanningCustomerAccounts} entity.
 */
export class DemandPlanningCustomerAccountsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DemandPlanningCustomerAccounts<T>, T> {
  /**
   * Returns a request builder for querying all `DemandPlanningCustomerAccounts` entities.
   * @returns A request builder for creating requests to retrieve all `DemandPlanningCustomerAccounts` entities.
   */
  getAll(): GetAllRequestBuilder<DemandPlanningCustomerAccounts<T>, T> {
    return new GetAllRequestBuilder<DemandPlanningCustomerAccounts<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DemandPlanningCustomerAccounts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DemandPlanningCustomerAccounts`.
   */
  create(
    entity: DemandPlanningCustomerAccounts<T>
  ): CreateRequestBuilder<DemandPlanningCustomerAccounts<T>, T> {
    return new CreateRequestBuilder<DemandPlanningCustomerAccounts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DemandPlanningCustomerAccounts` entity based on its keys.
   * @param customerAccount Key property. See {@link DemandPlanningCustomerAccounts.customerAccount}.
   * @param customerDataAreaId Key property. See {@link DemandPlanningCustomerAccounts.customerDataAreaId}.
   * @returns A request builder for creating requests to retrieve one `DemandPlanningCustomerAccounts` entity based on its keys.
   */
  getByKey(
    customerAccount: DeserializedType<T, 'Edm.String'>,
    customerDataAreaId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DemandPlanningCustomerAccounts<T>, T> {
    return new GetByKeyRequestBuilder<DemandPlanningCustomerAccounts<T>, T>(
      this.entityApi,
      {
        CustomerAccount: customerAccount,
        CustomerDataAreaId: customerDataAreaId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DemandPlanningCustomerAccounts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DemandPlanningCustomerAccounts`.
   */
  update(
    entity: DemandPlanningCustomerAccounts<T>
  ): UpdateRequestBuilder<DemandPlanningCustomerAccounts<T>, T> {
    return new UpdateRequestBuilder<DemandPlanningCustomerAccounts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DemandPlanningCustomerAccounts`.
   * @param customerAccount Key property. See {@link DemandPlanningCustomerAccounts.customerAccount}.
   * @param customerDataAreaId Key property. See {@link DemandPlanningCustomerAccounts.customerDataAreaId}.
   * @returns A request builder for creating requests that delete an entity of type `DemandPlanningCustomerAccounts`.
   */
  delete(
    customerAccount: string,
    customerDataAreaId: string
  ): DeleteRequestBuilder<DemandPlanningCustomerAccounts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DemandPlanningCustomerAccounts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DemandPlanningCustomerAccounts` by taking the entity as a parameter.
   */
  delete(
    entity: DemandPlanningCustomerAccounts<T>
  ): DeleteRequestBuilder<DemandPlanningCustomerAccounts<T>, T>;
  delete(
    customerAccountOrEntity: any,
    customerDataAreaId?: string
  ): DeleteRequestBuilder<DemandPlanningCustomerAccounts<T>, T> {
    return new DeleteRequestBuilder<DemandPlanningCustomerAccounts<T>, T>(
      this.entityApi,
      customerAccountOrEntity instanceof DemandPlanningCustomerAccounts
        ? customerAccountOrEntity
        : {
            CustomerAccount: customerAccountOrEntity!,
            CustomerDataAreaId: customerDataAreaId!
          }
    );
  }
}

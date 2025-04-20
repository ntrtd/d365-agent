/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { AggregatedDemandsPerAllocationKey } from './AggregatedDemandsPerAllocationKey';
import { ReqDemPlanDemandCategory } from './ReqDemPlanDemandCategory';

/**
 * Request builder class for operations supported on the {@link AggregatedDemandsPerAllocationKey} entity.
 */
export class AggregatedDemandsPerAllocationKeyRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AggregatedDemandsPerAllocationKey<T>, T> {
  /**
   * Returns a request builder for querying all `AggregatedDemandsPerAllocationKey` entities.
   * @returns A request builder for creating requests to retrieve all `AggregatedDemandsPerAllocationKey` entities.
   */
  getAll(): GetAllRequestBuilder<AggregatedDemandsPerAllocationKey<T>, T> {
    return new GetAllRequestBuilder<AggregatedDemandsPerAllocationKey<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AggregatedDemandsPerAllocationKey` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AggregatedDemandsPerAllocationKey`.
   */
  create(
    entity: AggregatedDemandsPerAllocationKey<T>
  ): CreateRequestBuilder<AggregatedDemandsPerAllocationKey<T>, T> {
    return new CreateRequestBuilder<AggregatedDemandsPerAllocationKey<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AggregatedDemandsPerAllocationKey` entity based on its keys.
   * @param dataAreaId Key property. See {@link AggregatedDemandsPerAllocationKey.dataAreaId}.
   * @param demandCategory Key property. See {@link AggregatedDemandsPerAllocationKey.demandCategory}.
   * @param deliveringSiteId Key property. See {@link AggregatedDemandsPerAllocationKey.deliveringSiteId}.
   * @param productAllocationKeyId Key property. See {@link AggregatedDemandsPerAllocationKey.productAllocationKeyId}.
   * @param demandDate Key property. See {@link AggregatedDemandsPerAllocationKey.demandDate}.
   * @returns A request builder for creating requests to retrieve one `AggregatedDemandsPerAllocationKey` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    demandCategory: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.ReqDemPlanDemandCategory'
    >,
    deliveringSiteId: DeserializedType<T, 'Edm.String'>,
    productAllocationKeyId: DeserializedType<T, 'Edm.String'>,
    demandDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<AggregatedDemandsPerAllocationKey<T>, T> {
    return new GetByKeyRequestBuilder<AggregatedDemandsPerAllocationKey<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        DemandCategory: demandCategory,
        DeliveringSiteId: deliveringSiteId,
        ProductAllocationKeyId: productAllocationKeyId,
        DemandDate: demandDate
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AggregatedDemandsPerAllocationKey`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AggregatedDemandsPerAllocationKey`.
   */
  update(
    entity: AggregatedDemandsPerAllocationKey<T>
  ): UpdateRequestBuilder<AggregatedDemandsPerAllocationKey<T>, T> {
    return new UpdateRequestBuilder<AggregatedDemandsPerAllocationKey<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AggregatedDemandsPerAllocationKey`.
   * @param dataAreaId Key property. See {@link AggregatedDemandsPerAllocationKey.dataAreaId}.
   * @param demandCategory Key property. See {@link AggregatedDemandsPerAllocationKey.demandCategory}.
   * @param deliveringSiteId Key property. See {@link AggregatedDemandsPerAllocationKey.deliveringSiteId}.
   * @param productAllocationKeyId Key property. See {@link AggregatedDemandsPerAllocationKey.productAllocationKeyId}.
   * @param demandDate Key property. See {@link AggregatedDemandsPerAllocationKey.demandDate}.
   * @returns A request builder for creating requests that delete an entity of type `AggregatedDemandsPerAllocationKey`.
   */
  delete(
    dataAreaId: string,
    demandCategory: ReqDemPlanDemandCategory,
    deliveringSiteId: string,
    productAllocationKeyId: string,
    demandDate: Moment
  ): DeleteRequestBuilder<AggregatedDemandsPerAllocationKey<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AggregatedDemandsPerAllocationKey`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AggregatedDemandsPerAllocationKey` by taking the entity as a parameter.
   */
  delete(
    entity: AggregatedDemandsPerAllocationKey<T>
  ): DeleteRequestBuilder<AggregatedDemandsPerAllocationKey<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    demandCategory?: ReqDemPlanDemandCategory,
    deliveringSiteId?: string,
    productAllocationKeyId?: string,
    demandDate?: Moment
  ): DeleteRequestBuilder<AggregatedDemandsPerAllocationKey<T>, T> {
    return new DeleteRequestBuilder<AggregatedDemandsPerAllocationKey<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AggregatedDemandsPerAllocationKey
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            DemandCategory: demandCategory!,
            DeliveringSiteId: deliveringSiteId!,
            ProductAllocationKeyId: productAllocationKeyId!,
            DemandDate: demandDate!
          }
    );
  }
}

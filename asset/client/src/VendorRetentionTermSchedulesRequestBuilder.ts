/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { VendorRetentionTermSchedules } from './VendorRetentionTermSchedules';

/**
 * Request builder class for operations supported on the {@link VendorRetentionTermSchedules} entity.
 */
export class VendorRetentionTermSchedulesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendorRetentionTermSchedules<T>, T> {
  /**
   * Returns a request builder for querying all `VendorRetentionTermSchedules` entities.
   * @returns A request builder for creating requests to retrieve all `VendorRetentionTermSchedules` entities.
   */
  getAll(): GetAllRequestBuilder<VendorRetentionTermSchedules<T>, T> {
    return new GetAllRequestBuilder<VendorRetentionTermSchedules<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `VendorRetentionTermSchedules` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendorRetentionTermSchedules`.
   */
  create(
    entity: VendorRetentionTermSchedules<T>
  ): CreateRequestBuilder<VendorRetentionTermSchedules<T>, T> {
    return new CreateRequestBuilder<VendorRetentionTermSchedules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VendorRetentionTermSchedules` entity based on its keys.
   * @param dataAreaId Key property. See {@link VendorRetentionTermSchedules.dataAreaId}.
   * @param ruleId Key property. See {@link VendorRetentionTermSchedules.ruleId}.
   * @param percentageOfUnitsDelivered Key property. See {@link VendorRetentionTermSchedules.percentageOfUnitsDelivered}.
   * @returns A request builder for creating requests to retrieve one `VendorRetentionTermSchedules` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    ruleId: DeserializedType<T, 'Edm.String'>,
    percentageOfUnitsDelivered: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<VendorRetentionTermSchedules<T>, T> {
    return new GetByKeyRequestBuilder<VendorRetentionTermSchedules<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RuleID: ruleId,
        PercentageOfUnitsDelivered: percentageOfUnitsDelivered
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `VendorRetentionTermSchedules`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendorRetentionTermSchedules`.
   */
  update(
    entity: VendorRetentionTermSchedules<T>
  ): UpdateRequestBuilder<VendorRetentionTermSchedules<T>, T> {
    return new UpdateRequestBuilder<VendorRetentionTermSchedules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VendorRetentionTermSchedules`.
   * @param dataAreaId Key property. See {@link VendorRetentionTermSchedules.dataAreaId}.
   * @param ruleId Key property. See {@link VendorRetentionTermSchedules.ruleId}.
   * @param percentageOfUnitsDelivered Key property. See {@link VendorRetentionTermSchedules.percentageOfUnitsDelivered}.
   * @returns A request builder for creating requests that delete an entity of type `VendorRetentionTermSchedules`.
   */
  delete(
    dataAreaId: string,
    ruleId: string,
    percentageOfUnitsDelivered: BigNumber
  ): DeleteRequestBuilder<VendorRetentionTermSchedules<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendorRetentionTermSchedules`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendorRetentionTermSchedules` by taking the entity as a parameter.
   */
  delete(
    entity: VendorRetentionTermSchedules<T>
  ): DeleteRequestBuilder<VendorRetentionTermSchedules<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    ruleId?: string,
    percentageOfUnitsDelivered?: BigNumber
  ): DeleteRequestBuilder<VendorRetentionTermSchedules<T>, T> {
    return new DeleteRequestBuilder<VendorRetentionTermSchedules<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VendorRetentionTermSchedules
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RuleID: ruleId!,
            PercentageOfUnitsDelivered: percentageOfUnitsDelivered!
          }
    );
  }
}

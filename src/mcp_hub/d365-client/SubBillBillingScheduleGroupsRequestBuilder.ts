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
import { SubBillBillingScheduleGroups } from './SubBillBillingScheduleGroups';

/**
 * Request builder class for operations supported on the {@link SubBillBillingScheduleGroups} entity.
 */
export class SubBillBillingScheduleGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SubBillBillingScheduleGroups<T>, T> {
  /**
   * Returns a request builder for querying all `SubBillBillingScheduleGroups` entities.
   * @returns A request builder for creating requests to retrieve all `SubBillBillingScheduleGroups` entities.
   */
  getAll(): GetAllRequestBuilder<SubBillBillingScheduleGroups<T>, T> {
    return new GetAllRequestBuilder<SubBillBillingScheduleGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SubBillBillingScheduleGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SubBillBillingScheduleGroups`.
   */
  create(
    entity: SubBillBillingScheduleGroups<T>
  ): CreateRequestBuilder<SubBillBillingScheduleGroups<T>, T> {
    return new CreateRequestBuilder<SubBillBillingScheduleGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SubBillBillingScheduleGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link SubBillBillingScheduleGroups.dataAreaId}.
   * @param billingScheduleGroup Key property. See {@link SubBillBillingScheduleGroups.billingScheduleGroup}.
   * @returns A request builder for creating requests to retrieve one `SubBillBillingScheduleGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    billingScheduleGroup: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SubBillBillingScheduleGroups<T>, T> {
    return new GetByKeyRequestBuilder<SubBillBillingScheduleGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        BillingScheduleGroup: billingScheduleGroup
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SubBillBillingScheduleGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SubBillBillingScheduleGroups`.
   */
  update(
    entity: SubBillBillingScheduleGroups<T>
  ): UpdateRequestBuilder<SubBillBillingScheduleGroups<T>, T> {
    return new UpdateRequestBuilder<SubBillBillingScheduleGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SubBillBillingScheduleGroups`.
   * @param dataAreaId Key property. See {@link SubBillBillingScheduleGroups.dataAreaId}.
   * @param billingScheduleGroup Key property. See {@link SubBillBillingScheduleGroups.billingScheduleGroup}.
   * @returns A request builder for creating requests that delete an entity of type `SubBillBillingScheduleGroups`.
   */
  delete(
    dataAreaId: string,
    billingScheduleGroup: string
  ): DeleteRequestBuilder<SubBillBillingScheduleGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SubBillBillingScheduleGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SubBillBillingScheduleGroups` by taking the entity as a parameter.
   */
  delete(
    entity: SubBillBillingScheduleGroups<T>
  ): DeleteRequestBuilder<SubBillBillingScheduleGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    billingScheduleGroup?: string
  ): DeleteRequestBuilder<SubBillBillingScheduleGroups<T>, T> {
    return new DeleteRequestBuilder<SubBillBillingScheduleGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SubBillBillingScheduleGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            BillingScheduleGroup: billingScheduleGroup!
          }
    );
  }
}

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
import { SubBillDeferralScheduleTableBiEntities } from './SubBillDeferralScheduleTableBiEntities';

/**
 * Request builder class for operations supported on the {@link SubBillDeferralScheduleTableBiEntities} entity.
 */
export class SubBillDeferralScheduleTableBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SubBillDeferralScheduleTableBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `SubBillDeferralScheduleTableBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `SubBillDeferralScheduleTableBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<SubBillDeferralScheduleTableBiEntities<T>, T> {
    return new GetAllRequestBuilder<
      SubBillDeferralScheduleTableBiEntities<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SubBillDeferralScheduleTableBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SubBillDeferralScheduleTableBiEntities`.
   */
  create(
    entity: SubBillDeferralScheduleTableBiEntities<T>
  ): CreateRequestBuilder<SubBillDeferralScheduleTableBiEntities<T>, T> {
    return new CreateRequestBuilder<
      SubBillDeferralScheduleTableBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `SubBillDeferralScheduleTableBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link SubBillDeferralScheduleTableBiEntities.dataAreaId}.
   * @param subBillDeferralScheduleNumber Key property. See {@link SubBillDeferralScheduleTableBiEntities.subBillDeferralScheduleNumber}.
   * @returns A request builder for creating requests to retrieve one `SubBillDeferralScheduleTableBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    subBillDeferralScheduleNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SubBillDeferralScheduleTableBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<
      SubBillDeferralScheduleTableBiEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      SubBillDeferralScheduleNumber: subBillDeferralScheduleNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `SubBillDeferralScheduleTableBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SubBillDeferralScheduleTableBiEntities`.
   */
  update(
    entity: SubBillDeferralScheduleTableBiEntities<T>
  ): UpdateRequestBuilder<SubBillDeferralScheduleTableBiEntities<T>, T> {
    return new UpdateRequestBuilder<
      SubBillDeferralScheduleTableBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `SubBillDeferralScheduleTableBiEntities`.
   * @param dataAreaId Key property. See {@link SubBillDeferralScheduleTableBiEntities.dataAreaId}.
   * @param subBillDeferralScheduleNumber Key property. See {@link SubBillDeferralScheduleTableBiEntities.subBillDeferralScheduleNumber}.
   * @returns A request builder for creating requests that delete an entity of type `SubBillDeferralScheduleTableBiEntities`.
   */
  delete(
    dataAreaId: string,
    subBillDeferralScheduleNumber: string
  ): DeleteRequestBuilder<SubBillDeferralScheduleTableBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SubBillDeferralScheduleTableBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SubBillDeferralScheduleTableBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: SubBillDeferralScheduleTableBiEntities<T>
  ): DeleteRequestBuilder<SubBillDeferralScheduleTableBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    subBillDeferralScheduleNumber?: string
  ): DeleteRequestBuilder<SubBillDeferralScheduleTableBiEntities<T>, T> {
    return new DeleteRequestBuilder<
      SubBillDeferralScheduleTableBiEntities<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof SubBillDeferralScheduleTableBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SubBillDeferralScheduleNumber: subBillDeferralScheduleNumber!
          }
    );
  }
}

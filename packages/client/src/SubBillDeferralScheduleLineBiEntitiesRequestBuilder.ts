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
import { SubBillDeferralScheduleLineBiEntities } from './SubBillDeferralScheduleLineBiEntities';

/**
 * Request builder class for operations supported on the {@link SubBillDeferralScheduleLineBiEntities} entity.
 */
export class SubBillDeferralScheduleLineBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SubBillDeferralScheduleLineBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `SubBillDeferralScheduleLineBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `SubBillDeferralScheduleLineBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<SubBillDeferralScheduleLineBiEntities<T>, T> {
    return new GetAllRequestBuilder<
      SubBillDeferralScheduleLineBiEntities<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SubBillDeferralScheduleLineBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SubBillDeferralScheduleLineBiEntities`.
   */
  create(
    entity: SubBillDeferralScheduleLineBiEntities<T>
  ): CreateRequestBuilder<SubBillDeferralScheduleLineBiEntities<T>, T> {
    return new CreateRequestBuilder<
      SubBillDeferralScheduleLineBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `SubBillDeferralScheduleLineBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link SubBillDeferralScheduleLineBiEntities.dataAreaId}.
   * @param line Key property. See {@link SubBillDeferralScheduleLineBiEntities.line}.
   * @param subBillDeferralScheduleNumber Key property. See {@link SubBillDeferralScheduleLineBiEntities.subBillDeferralScheduleNumber}.
   * @returns A request builder for creating requests to retrieve one `SubBillDeferralScheduleLineBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    line: DeserializedType<T, 'Edm.Int32'>,
    subBillDeferralScheduleNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SubBillDeferralScheduleLineBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<
      SubBillDeferralScheduleLineBiEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      Line: line,
      SubBillDeferralScheduleNumber: subBillDeferralScheduleNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `SubBillDeferralScheduleLineBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SubBillDeferralScheduleLineBiEntities`.
   */
  update(
    entity: SubBillDeferralScheduleLineBiEntities<T>
  ): UpdateRequestBuilder<SubBillDeferralScheduleLineBiEntities<T>, T> {
    return new UpdateRequestBuilder<
      SubBillDeferralScheduleLineBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `SubBillDeferralScheduleLineBiEntities`.
   * @param dataAreaId Key property. See {@link SubBillDeferralScheduleLineBiEntities.dataAreaId}.
   * @param line Key property. See {@link SubBillDeferralScheduleLineBiEntities.line}.
   * @param subBillDeferralScheduleNumber Key property. See {@link SubBillDeferralScheduleLineBiEntities.subBillDeferralScheduleNumber}.
   * @returns A request builder for creating requests that delete an entity of type `SubBillDeferralScheduleLineBiEntities`.
   */
  delete(
    dataAreaId: string,
    line: number,
    subBillDeferralScheduleNumber: string
  ): DeleteRequestBuilder<SubBillDeferralScheduleLineBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SubBillDeferralScheduleLineBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SubBillDeferralScheduleLineBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: SubBillDeferralScheduleLineBiEntities<T>
  ): DeleteRequestBuilder<SubBillDeferralScheduleLineBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    line?: number,
    subBillDeferralScheduleNumber?: string
  ): DeleteRequestBuilder<SubBillDeferralScheduleLineBiEntities<T>, T> {
    return new DeleteRequestBuilder<
      SubBillDeferralScheduleLineBiEntities<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof SubBillDeferralScheduleLineBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Line: line!,
            SubBillDeferralScheduleNumber: subBillDeferralScheduleNumber!
          }
    );
  }
}

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
import { WorkerPositionEarningCodesV2 } from './WorkerPositionEarningCodesV2';

/**
 * Request builder class for operations supported on the {@link WorkerPositionEarningCodesV2} entity.
 */
export class WorkerPositionEarningCodesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WorkerPositionEarningCodesV2<T>, T> {
  /**
   * Returns a request builder for querying all `WorkerPositionEarningCodesV2` entities.
   * @returns A request builder for creating requests to retrieve all `WorkerPositionEarningCodesV2` entities.
   */
  getAll(): GetAllRequestBuilder<WorkerPositionEarningCodesV2<T>, T> {
    return new GetAllRequestBuilder<WorkerPositionEarningCodesV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `WorkerPositionEarningCodesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WorkerPositionEarningCodesV2`.
   */
  create(
    entity: WorkerPositionEarningCodesV2<T>
  ): CreateRequestBuilder<WorkerPositionEarningCodesV2<T>, T> {
    return new CreateRequestBuilder<WorkerPositionEarningCodesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WorkerPositionEarningCodesV2` entity based on its keys.
   * @param personnelNumber Key property. See {@link WorkerPositionEarningCodesV2.personnelNumber}.
   * @param earningCodeId Key property. See {@link WorkerPositionEarningCodesV2.earningCodeId}.
   * @param positionId Key property. See {@link WorkerPositionEarningCodesV2.positionId}.
   * @param validFrom Key property. See {@link WorkerPositionEarningCodesV2.validFrom}.
   * @returns A request builder for creating requests to retrieve one `WorkerPositionEarningCodesV2` entity based on its keys.
   */
  getByKey(
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    earningCodeId: DeserializedType<T, 'Edm.String'>,
    positionId: DeserializedType<T, 'Edm.String'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<WorkerPositionEarningCodesV2<T>, T> {
    return new GetByKeyRequestBuilder<WorkerPositionEarningCodesV2<T>, T>(
      this.entityApi,
      {
        PersonnelNumber: personnelNumber,
        EarningCodeId: earningCodeId,
        PositionId: positionId,
        ValidFrom: validFrom
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WorkerPositionEarningCodesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WorkerPositionEarningCodesV2`.
   */
  update(
    entity: WorkerPositionEarningCodesV2<T>
  ): UpdateRequestBuilder<WorkerPositionEarningCodesV2<T>, T> {
    return new UpdateRequestBuilder<WorkerPositionEarningCodesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WorkerPositionEarningCodesV2`.
   * @param personnelNumber Key property. See {@link WorkerPositionEarningCodesV2.personnelNumber}.
   * @param earningCodeId Key property. See {@link WorkerPositionEarningCodesV2.earningCodeId}.
   * @param positionId Key property. See {@link WorkerPositionEarningCodesV2.positionId}.
   * @param validFrom Key property. See {@link WorkerPositionEarningCodesV2.validFrom}.
   * @returns A request builder for creating requests that delete an entity of type `WorkerPositionEarningCodesV2`.
   */
  delete(
    personnelNumber: string,
    earningCodeId: string,
    positionId: string,
    validFrom: Moment
  ): DeleteRequestBuilder<WorkerPositionEarningCodesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WorkerPositionEarningCodesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WorkerPositionEarningCodesV2` by taking the entity as a parameter.
   */
  delete(
    entity: WorkerPositionEarningCodesV2<T>
  ): DeleteRequestBuilder<WorkerPositionEarningCodesV2<T>, T>;
  delete(
    personnelNumberOrEntity: any,
    earningCodeId?: string,
    positionId?: string,
    validFrom?: Moment
  ): DeleteRequestBuilder<WorkerPositionEarningCodesV2<T>, T> {
    return new DeleteRequestBuilder<WorkerPositionEarningCodesV2<T>, T>(
      this.entityApi,
      personnelNumberOrEntity instanceof WorkerPositionEarningCodesV2
        ? personnelNumberOrEntity
        : {
            PersonnelNumber: personnelNumberOrEntity!,
            EarningCodeId: earningCodeId!,
            PositionId: positionId!,
            ValidFrom: validFrom!
          }
    );
  }
}

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
import { WorkerPositionEarningCodes } from './WorkerPositionEarningCodes';

/**
 * Request builder class for operations supported on the {@link WorkerPositionEarningCodes} entity.
 */
export class WorkerPositionEarningCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WorkerPositionEarningCodes<T>, T> {
  /**
   * Returns a request builder for querying all `WorkerPositionEarningCodes` entities.
   * @returns A request builder for creating requests to retrieve all `WorkerPositionEarningCodes` entities.
   */
  getAll(): GetAllRequestBuilder<WorkerPositionEarningCodes<T>, T> {
    return new GetAllRequestBuilder<WorkerPositionEarningCodes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `WorkerPositionEarningCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WorkerPositionEarningCodes`.
   */
  create(
    entity: WorkerPositionEarningCodes<T>
  ): CreateRequestBuilder<WorkerPositionEarningCodes<T>, T> {
    return new CreateRequestBuilder<WorkerPositionEarningCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WorkerPositionEarningCodes` entity based on its keys.
   * @param personnelNumber Key property. See {@link WorkerPositionEarningCodes.personnelNumber}.
   * @param earningCodeId Key property. See {@link WorkerPositionEarningCodes.earningCodeId}.
   * @param positionId Key property. See {@link WorkerPositionEarningCodes.positionId}.
   * @param validFrom Key property. See {@link WorkerPositionEarningCodes.validFrom}.
   * @param validTo Key property. See {@link WorkerPositionEarningCodes.validTo}.
   * @returns A request builder for creating requests to retrieve one `WorkerPositionEarningCodes` entity based on its keys.
   */
  getByKey(
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    earningCodeId: DeserializedType<T, 'Edm.String'>,
    positionId: DeserializedType<T, 'Edm.String'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>,
    validTo: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<WorkerPositionEarningCodes<T>, T> {
    return new GetByKeyRequestBuilder<WorkerPositionEarningCodes<T>, T>(
      this.entityApi,
      {
        PersonnelNumber: personnelNumber,
        EarningCodeId: earningCodeId,
        PositionId: positionId,
        ValidFrom: validFrom,
        ValidTo: validTo
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WorkerPositionEarningCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WorkerPositionEarningCodes`.
   */
  update(
    entity: WorkerPositionEarningCodes<T>
  ): UpdateRequestBuilder<WorkerPositionEarningCodes<T>, T> {
    return new UpdateRequestBuilder<WorkerPositionEarningCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WorkerPositionEarningCodes`.
   * @param personnelNumber Key property. See {@link WorkerPositionEarningCodes.personnelNumber}.
   * @param earningCodeId Key property. See {@link WorkerPositionEarningCodes.earningCodeId}.
   * @param positionId Key property. See {@link WorkerPositionEarningCodes.positionId}.
   * @param validFrom Key property. See {@link WorkerPositionEarningCodes.validFrom}.
   * @param validTo Key property. See {@link WorkerPositionEarningCodes.validTo}.
   * @returns A request builder for creating requests that delete an entity of type `WorkerPositionEarningCodes`.
   */
  delete(
    personnelNumber: string,
    earningCodeId: string,
    positionId: string,
    validFrom: Moment,
    validTo: Moment
  ): DeleteRequestBuilder<WorkerPositionEarningCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WorkerPositionEarningCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WorkerPositionEarningCodes` by taking the entity as a parameter.
   */
  delete(
    entity: WorkerPositionEarningCodes<T>
  ): DeleteRequestBuilder<WorkerPositionEarningCodes<T>, T>;
  delete(
    personnelNumberOrEntity: any,
    earningCodeId?: string,
    positionId?: string,
    validFrom?: Moment,
    validTo?: Moment
  ): DeleteRequestBuilder<WorkerPositionEarningCodes<T>, T> {
    return new DeleteRequestBuilder<WorkerPositionEarningCodes<T>, T>(
      this.entityApi,
      personnelNumberOrEntity instanceof WorkerPositionEarningCodes
        ? personnelNumberOrEntity
        : {
            PersonnelNumber: personnelNumberOrEntity!,
            EarningCodeId: earningCodeId!,
            PositionId: positionId!,
            ValidFrom: validFrom!,
            ValidTo: validTo!
          }
    );
  }
}

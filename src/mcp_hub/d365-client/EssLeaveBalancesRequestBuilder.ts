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
import { EssLeaveBalances } from './EssLeaveBalances';

/**
 * Request builder class for operations supported on the {@link EssLeaveBalances} entity.
 */
export class EssLeaveBalancesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EssLeaveBalances<T>, T> {
  /**
   * Returns a request builder for querying all `EssLeaveBalances` entities.
   * @returns A request builder for creating requests to retrieve all `EssLeaveBalances` entities.
   */
  getAll(): GetAllRequestBuilder<EssLeaveBalances<T>, T> {
    return new GetAllRequestBuilder<EssLeaveBalances<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EssLeaveBalances` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EssLeaveBalances`.
   */
  create(
    entity: EssLeaveBalances<T>
  ): CreateRequestBuilder<EssLeaveBalances<T>, T> {
    return new CreateRequestBuilder<EssLeaveBalances<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EssLeaveBalances` entity based on its keys.
   * @param dataAreaId Key property. See {@link EssLeaveBalances.dataAreaId}.
   * @param personnelNumber Key property. See {@link EssLeaveBalances.personnelNumber}.
   * @param leaveTypeId Key property. See {@link EssLeaveBalances.leaveTypeId}.
   * @returns A request builder for creating requests to retrieve one `EssLeaveBalances` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    leaveTypeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EssLeaveBalances<T>, T> {
    return new GetByKeyRequestBuilder<EssLeaveBalances<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      PersonnelNumber: personnelNumber,
      LeaveTypeId: leaveTypeId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `EssLeaveBalances`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EssLeaveBalances`.
   */
  update(
    entity: EssLeaveBalances<T>
  ): UpdateRequestBuilder<EssLeaveBalances<T>, T> {
    return new UpdateRequestBuilder<EssLeaveBalances<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EssLeaveBalances`.
   * @param dataAreaId Key property. See {@link EssLeaveBalances.dataAreaId}.
   * @param personnelNumber Key property. See {@link EssLeaveBalances.personnelNumber}.
   * @param leaveTypeId Key property. See {@link EssLeaveBalances.leaveTypeId}.
   * @returns A request builder for creating requests that delete an entity of type `EssLeaveBalances`.
   */
  delete(
    dataAreaId: string,
    personnelNumber: string,
    leaveTypeId: string
  ): DeleteRequestBuilder<EssLeaveBalances<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EssLeaveBalances`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EssLeaveBalances` by taking the entity as a parameter.
   */
  delete(
    entity: EssLeaveBalances<T>
  ): DeleteRequestBuilder<EssLeaveBalances<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    personnelNumber?: string,
    leaveTypeId?: string
  ): DeleteRequestBuilder<EssLeaveBalances<T>, T> {
    return new DeleteRequestBuilder<EssLeaveBalances<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof EssLeaveBalances
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PersonnelNumber: personnelNumber!,
            LeaveTypeId: leaveTypeId!
          }
    );
  }
}

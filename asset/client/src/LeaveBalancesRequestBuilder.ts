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
import { LeaveBalances } from './LeaveBalances';

/**
 * Request builder class for operations supported on the {@link LeaveBalances} entity.
 */
export class LeaveBalancesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LeaveBalances<T>, T> {
  /**
   * Returns a request builder for querying all `LeaveBalances` entities.
   * @returns A request builder for creating requests to retrieve all `LeaveBalances` entities.
   */
  getAll(): GetAllRequestBuilder<LeaveBalances<T>, T> {
    return new GetAllRequestBuilder<LeaveBalances<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LeaveBalances` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LeaveBalances`.
   */
  create(entity: LeaveBalances<T>): CreateRequestBuilder<LeaveBalances<T>, T> {
    return new CreateRequestBuilder<LeaveBalances<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LeaveBalances` entity based on its keys.
   * @param dataAreaId Key property. See {@link LeaveBalances.dataAreaId}.
   * @param balanceType Key property. See {@link LeaveBalances.balanceType}.
   * @param firstName Key property. See {@link LeaveBalances.firstName}.
   * @param lastName Key property. See {@link LeaveBalances.lastName}.
   * @param middleName Key property. See {@link LeaveBalances.middleName}.
   * @param personnelNumber Key property. See {@link LeaveBalances.personnelNumber}.
   * @param worker Key property. See {@link LeaveBalances.worker}.
   * @returns A request builder for creating requests to retrieve one `LeaveBalances` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    balanceType: DeserializedType<T, 'Edm.String'>,
    firstName: DeserializedType<T, 'Edm.String'>,
    lastName: DeserializedType<T, 'Edm.String'>,
    middleName: DeserializedType<T, 'Edm.String'>,
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    worker: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<LeaveBalances<T>, T> {
    return new GetByKeyRequestBuilder<LeaveBalances<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      BalanceType: balanceType,
      FirstName: firstName,
      LastName: lastName,
      MiddleName: middleName,
      PersonnelNumber: personnelNumber,
      Worker: worker
    });
  }

  /**
   * Returns a request builder for updating an entity of type `LeaveBalances`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LeaveBalances`.
   */
  update(entity: LeaveBalances<T>): UpdateRequestBuilder<LeaveBalances<T>, T> {
    return new UpdateRequestBuilder<LeaveBalances<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LeaveBalances`.
   * @param dataAreaId Key property. See {@link LeaveBalances.dataAreaId}.
   * @param balanceType Key property. See {@link LeaveBalances.balanceType}.
   * @param firstName Key property. See {@link LeaveBalances.firstName}.
   * @param lastName Key property. See {@link LeaveBalances.lastName}.
   * @param middleName Key property. See {@link LeaveBalances.middleName}.
   * @param personnelNumber Key property. See {@link LeaveBalances.personnelNumber}.
   * @param worker Key property. See {@link LeaveBalances.worker}.
   * @returns A request builder for creating requests that delete an entity of type `LeaveBalances`.
   */
  delete(
    dataAreaId: string,
    balanceType: string,
    firstName: string,
    lastName: string,
    middleName: string,
    personnelNumber: string,
    worker: BigNumber
  ): DeleteRequestBuilder<LeaveBalances<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LeaveBalances`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LeaveBalances` by taking the entity as a parameter.
   */
  delete(entity: LeaveBalances<T>): DeleteRequestBuilder<LeaveBalances<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    balanceType?: string,
    firstName?: string,
    lastName?: string,
    middleName?: string,
    personnelNumber?: string,
    worker?: BigNumber
  ): DeleteRequestBuilder<LeaveBalances<T>, T> {
    return new DeleteRequestBuilder<LeaveBalances<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LeaveBalances
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            BalanceType: balanceType!,
            FirstName: firstName!,
            LastName: lastName!,
            MiddleName: middleName!,
            PersonnelNumber: personnelNumber!,
            Worker: worker!
          }
    );
  }
}

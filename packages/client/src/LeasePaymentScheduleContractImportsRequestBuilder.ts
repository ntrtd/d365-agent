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
import { LeasePaymentScheduleContractImports } from './LeasePaymentScheduleContractImports';

/**
 * Request builder class for operations supported on the {@link LeasePaymentScheduleContractImports} entity.
 */
export class LeasePaymentScheduleContractImportsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LeasePaymentScheduleContractImports<T>, T> {
  /**
   * Returns a request builder for querying all `LeasePaymentScheduleContractImports` entities.
   * @returns A request builder for creating requests to retrieve all `LeasePaymentScheduleContractImports` entities.
   */
  getAll(): GetAllRequestBuilder<LeasePaymentScheduleContractImports<T>, T> {
    return new GetAllRequestBuilder<LeasePaymentScheduleContractImports<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LeasePaymentScheduleContractImports` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LeasePaymentScheduleContractImports`.
   */
  create(
    entity: LeasePaymentScheduleContractImports<T>
  ): CreateRequestBuilder<LeasePaymentScheduleContractImports<T>, T> {
    return new CreateRequestBuilder<LeasePaymentScheduleContractImports<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LeasePaymentScheduleContractImports` entity based on its keys.
   * @param leaseId Key property. See {@link LeasePaymentScheduleContractImports.leaseId}.
   * @param startDate Key property. See {@link LeasePaymentScheduleContractImports.startDate}.
   * @param importId Key property. See {@link LeasePaymentScheduleContractImports.importId}.
   * @returns A request builder for creating requests to retrieve one `LeasePaymentScheduleContractImports` entity based on its keys.
   */
  getByKey(
    leaseId: DeserializedType<T, 'Edm.String'>,
    startDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    importId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LeasePaymentScheduleContractImports<T>, T> {
    return new GetByKeyRequestBuilder<
      LeasePaymentScheduleContractImports<T>,
      T
    >(this.entityApi, {
      LeaseId: leaseId,
      StartDate: startDate,
      ImportId: importId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `LeasePaymentScheduleContractImports`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LeasePaymentScheduleContractImports`.
   */
  update(
    entity: LeasePaymentScheduleContractImports<T>
  ): UpdateRequestBuilder<LeasePaymentScheduleContractImports<T>, T> {
    return new UpdateRequestBuilder<LeasePaymentScheduleContractImports<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LeasePaymentScheduleContractImports`.
   * @param leaseId Key property. See {@link LeasePaymentScheduleContractImports.leaseId}.
   * @param startDate Key property. See {@link LeasePaymentScheduleContractImports.startDate}.
   * @param importId Key property. See {@link LeasePaymentScheduleContractImports.importId}.
   * @returns A request builder for creating requests that delete an entity of type `LeasePaymentScheduleContractImports`.
   */
  delete(
    leaseId: string,
    startDate: Moment,
    importId: string
  ): DeleteRequestBuilder<LeasePaymentScheduleContractImports<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LeasePaymentScheduleContractImports`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LeasePaymentScheduleContractImports` by taking the entity as a parameter.
   */
  delete(
    entity: LeasePaymentScheduleContractImports<T>
  ): DeleteRequestBuilder<LeasePaymentScheduleContractImports<T>, T>;
  delete(
    leaseIdOrEntity: any,
    startDate?: Moment,
    importId?: string
  ): DeleteRequestBuilder<LeasePaymentScheduleContractImports<T>, T> {
    return new DeleteRequestBuilder<LeasePaymentScheduleContractImports<T>, T>(
      this.entityApi,
      leaseIdOrEntity instanceof LeasePaymentScheduleContractImports
        ? leaseIdOrEntity
        : {
            LeaseId: leaseIdOrEntity!,
            StartDate: startDate!,
            ImportId: importId!
          }
    );
  }
}

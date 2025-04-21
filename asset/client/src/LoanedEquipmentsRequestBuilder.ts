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
import { LoanedEquipments } from './LoanedEquipments';

/**
 * Request builder class for operations supported on the {@link LoanedEquipments} entity.
 */
export class LoanedEquipmentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LoanedEquipments<T>, T> {
  /**
   * Returns a request builder for querying all `LoanedEquipments` entities.
   * @returns A request builder for creating requests to retrieve all `LoanedEquipments` entities.
   */
  getAll(): GetAllRequestBuilder<LoanedEquipments<T>, T> {
    return new GetAllRequestBuilder<LoanedEquipments<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LoanedEquipments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LoanedEquipments`.
   */
  create(
    entity: LoanedEquipments<T>
  ): CreateRequestBuilder<LoanedEquipments<T>, T> {
    return new CreateRequestBuilder<LoanedEquipments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LoanedEquipments` entity based on its keys.
   * @param personId Key property. See {@link LoanedEquipments.personId}.
   * @param loanItemId Key property. See {@link LoanedEquipments.loanItemId}.
   * @param loaned Key property. See {@link LoanedEquipments.loaned}.
   * @returns A request builder for creating requests to retrieve one `LoanedEquipments` entity based on its keys.
   */
  getByKey(
    personId: DeserializedType<T, 'Edm.String'>,
    loanItemId: DeserializedType<T, 'Edm.String'>,
    loaned: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<LoanedEquipments<T>, T> {
    return new GetByKeyRequestBuilder<LoanedEquipments<T>, T>(this.entityApi, {
      PersonId: personId,
      LoanItemId: loanItemId,
      Loaned: loaned
    });
  }

  /**
   * Returns a request builder for updating an entity of type `LoanedEquipments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LoanedEquipments`.
   */
  update(
    entity: LoanedEquipments<T>
  ): UpdateRequestBuilder<LoanedEquipments<T>, T> {
    return new UpdateRequestBuilder<LoanedEquipments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LoanedEquipments`.
   * @param personId Key property. See {@link LoanedEquipments.personId}.
   * @param loanItemId Key property. See {@link LoanedEquipments.loanItemId}.
   * @param loaned Key property. See {@link LoanedEquipments.loaned}.
   * @returns A request builder for creating requests that delete an entity of type `LoanedEquipments`.
   */
  delete(
    personId: string,
    loanItemId: string,
    loaned: Moment
  ): DeleteRequestBuilder<LoanedEquipments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LoanedEquipments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LoanedEquipments` by taking the entity as a parameter.
   */
  delete(
    entity: LoanedEquipments<T>
  ): DeleteRequestBuilder<LoanedEquipments<T>, T>;
  delete(
    personIdOrEntity: any,
    loanItemId?: string,
    loaned?: Moment
  ): DeleteRequestBuilder<LoanedEquipments<T>, T> {
    return new DeleteRequestBuilder<LoanedEquipments<T>, T>(
      this.entityApi,
      personIdOrEntity instanceof LoanedEquipments
        ? personIdOrEntity
        : {
            PersonId: personIdOrEntity!,
            LoanItemId: loanItemId!,
            Loaned: loaned!
          }
    );
  }
}

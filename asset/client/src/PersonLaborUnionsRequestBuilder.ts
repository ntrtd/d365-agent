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
import { PersonLaborUnions } from './PersonLaborUnions';

/**
 * Request builder class for operations supported on the {@link PersonLaborUnions} entity.
 */
export class PersonLaborUnionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PersonLaborUnions<T>, T> {
  /**
   * Returns a request builder for querying all `PersonLaborUnions` entities.
   * @returns A request builder for creating requests to retrieve all `PersonLaborUnions` entities.
   */
  getAll(): GetAllRequestBuilder<PersonLaborUnions<T>, T> {
    return new GetAllRequestBuilder<PersonLaborUnions<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PersonLaborUnions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PersonLaborUnions`.
   */
  create(
    entity: PersonLaborUnions<T>
  ): CreateRequestBuilder<PersonLaborUnions<T>, T> {
    return new CreateRequestBuilder<PersonLaborUnions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PersonLaborUnions` entity based on its keys.
   * @param partyNumber Key property. See {@link PersonLaborUnions.partyNumber}.
   * @param unionId Key property. See {@link PersonLaborUnions.unionId}.
   * @param startDate Key property. See {@link PersonLaborUnions.startDate}.
   * @returns A request builder for creating requests to retrieve one `PersonLaborUnions` entity based on its keys.
   */
  getByKey(
    partyNumber: DeserializedType<T, 'Edm.String'>,
    unionId: DeserializedType<T, 'Edm.String'>,
    startDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<PersonLaborUnions<T>, T> {
    return new GetByKeyRequestBuilder<PersonLaborUnions<T>, T>(this.entityApi, {
      PartyNumber: partyNumber,
      UnionId: unionId,
      StartDate: startDate
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PersonLaborUnions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PersonLaborUnions`.
   */
  update(
    entity: PersonLaborUnions<T>
  ): UpdateRequestBuilder<PersonLaborUnions<T>, T> {
    return new UpdateRequestBuilder<PersonLaborUnions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PersonLaborUnions`.
   * @param partyNumber Key property. See {@link PersonLaborUnions.partyNumber}.
   * @param unionId Key property. See {@link PersonLaborUnions.unionId}.
   * @param startDate Key property. See {@link PersonLaborUnions.startDate}.
   * @returns A request builder for creating requests that delete an entity of type `PersonLaborUnions`.
   */
  delete(
    partyNumber: string,
    unionId: string,
    startDate: Moment
  ): DeleteRequestBuilder<PersonLaborUnions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PersonLaborUnions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PersonLaborUnions` by taking the entity as a parameter.
   */
  delete(
    entity: PersonLaborUnions<T>
  ): DeleteRequestBuilder<PersonLaborUnions<T>, T>;
  delete(
    partyNumberOrEntity: any,
    unionId?: string,
    startDate?: Moment
  ): DeleteRequestBuilder<PersonLaborUnions<T>, T> {
    return new DeleteRequestBuilder<PersonLaborUnions<T>, T>(
      this.entityApi,
      partyNumberOrEntity instanceof PersonLaborUnions
        ? partyNumberOrEntity
        : {
            PartyNumber: partyNumberOrEntity!,
            UnionId: unionId!,
            StartDate: startDate!
          }
    );
  }
}

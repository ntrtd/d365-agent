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
import { CdsContactPersons } from './CdsContactPersons';

/**
 * Request builder class for operations supported on the {@link CdsContactPersons} entity.
 */
export class CdsContactPersonsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CdsContactPersons<T>, T> {
  /**
   * Returns a request builder for querying all `CdsContactPersons` entities.
   * @returns A request builder for creating requests to retrieve all `CdsContactPersons` entities.
   */
  getAll(): GetAllRequestBuilder<CdsContactPersons<T>, T> {
    return new GetAllRequestBuilder<CdsContactPersons<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CdsContactPersons` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CdsContactPersons`.
   */
  create(
    entity: CdsContactPersons<T>
  ): CreateRequestBuilder<CdsContactPersons<T>, T> {
    return new CreateRequestBuilder<CdsContactPersons<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CdsContactPersons` entity based on its keys.
   * @param dataAreaId Key property. See {@link CdsContactPersons.dataAreaId}.
   * @param contactPersonPartyNumber Key property. See {@link CdsContactPersons.contactPersonPartyNumber}.
   * @param associatedPartyNumber Key property. See {@link CdsContactPersons.associatedPartyNumber}.
   * @returns A request builder for creating requests to retrieve one `CdsContactPersons` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    contactPersonPartyNumber: DeserializedType<T, 'Edm.String'>,
    associatedPartyNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CdsContactPersons<T>, T> {
    return new GetByKeyRequestBuilder<CdsContactPersons<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ContactPersonPartyNumber: contactPersonPartyNumber,
      AssociatedPartyNumber: associatedPartyNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CdsContactPersons`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CdsContactPersons`.
   */
  update(
    entity: CdsContactPersons<T>
  ): UpdateRequestBuilder<CdsContactPersons<T>, T> {
    return new UpdateRequestBuilder<CdsContactPersons<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CdsContactPersons`.
   * @param dataAreaId Key property. See {@link CdsContactPersons.dataAreaId}.
   * @param contactPersonPartyNumber Key property. See {@link CdsContactPersons.contactPersonPartyNumber}.
   * @param associatedPartyNumber Key property. See {@link CdsContactPersons.associatedPartyNumber}.
   * @returns A request builder for creating requests that delete an entity of type `CdsContactPersons`.
   */
  delete(
    dataAreaId: string,
    contactPersonPartyNumber: string,
    associatedPartyNumber: string
  ): DeleteRequestBuilder<CdsContactPersons<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CdsContactPersons`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CdsContactPersons` by taking the entity as a parameter.
   */
  delete(
    entity: CdsContactPersons<T>
  ): DeleteRequestBuilder<CdsContactPersons<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    contactPersonPartyNumber?: string,
    associatedPartyNumber?: string
  ): DeleteRequestBuilder<CdsContactPersons<T>, T> {
    return new DeleteRequestBuilder<CdsContactPersons<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CdsContactPersons
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ContactPersonPartyNumber: contactPersonPartyNumber!,
            AssociatedPartyNumber: associatedPartyNumber!
          }
    );
  }
}

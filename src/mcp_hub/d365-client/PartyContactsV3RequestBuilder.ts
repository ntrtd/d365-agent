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
import { PartyContactsV3 } from './PartyContactsV3';

/**
 * Request builder class for operations supported on the {@link PartyContactsV3} entity.
 */
export class PartyContactsV3RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PartyContactsV3<T>, T> {
  /**
   * Returns a request builder for querying all `PartyContactsV3` entities.
   * @returns A request builder for creating requests to retrieve all `PartyContactsV3` entities.
   */
  getAll(): GetAllRequestBuilder<PartyContactsV3<T>, T> {
    return new GetAllRequestBuilder<PartyContactsV3<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PartyContactsV3` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PartyContactsV3`.
   */
  create(
    entity: PartyContactsV3<T>
  ): CreateRequestBuilder<PartyContactsV3<T>, T> {
    return new CreateRequestBuilder<PartyContactsV3<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PartyContactsV3` entity based on its keys.
   * @param partyNumber Key property. See {@link PartyContactsV3.partyNumber}.
   * @param electronicAddressId Key property. See {@link PartyContactsV3.electronicAddressId}.
   * @returns A request builder for creating requests to retrieve one `PartyContactsV3` entity based on its keys.
   */
  getByKey(
    partyNumber: DeserializedType<T, 'Edm.String'>,
    electronicAddressId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PartyContactsV3<T>, T> {
    return new GetByKeyRequestBuilder<PartyContactsV3<T>, T>(this.entityApi, {
      PartyNumber: partyNumber,
      ElectronicAddressId: electronicAddressId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PartyContactsV3`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PartyContactsV3`.
   */
  update(
    entity: PartyContactsV3<T>
  ): UpdateRequestBuilder<PartyContactsV3<T>, T> {
    return new UpdateRequestBuilder<PartyContactsV3<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PartyContactsV3`.
   * @param partyNumber Key property. See {@link PartyContactsV3.partyNumber}.
   * @param electronicAddressId Key property. See {@link PartyContactsV3.electronicAddressId}.
   * @returns A request builder for creating requests that delete an entity of type `PartyContactsV3`.
   */
  delete(
    partyNumber: string,
    electronicAddressId: string
  ): DeleteRequestBuilder<PartyContactsV3<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PartyContactsV3`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PartyContactsV3` by taking the entity as a parameter.
   */
  delete(
    entity: PartyContactsV3<T>
  ): DeleteRequestBuilder<PartyContactsV3<T>, T>;
  delete(
    partyNumberOrEntity: any,
    electronicAddressId?: string
  ): DeleteRequestBuilder<PartyContactsV3<T>, T> {
    return new DeleteRequestBuilder<PartyContactsV3<T>, T>(
      this.entityApi,
      partyNumberOrEntity instanceof PartyContactsV3
        ? partyNumberOrEntity
        : {
            PartyNumber: partyNumberOrEntity!,
            ElectronicAddressId: electronicAddressId!
          }
    );
  }
}

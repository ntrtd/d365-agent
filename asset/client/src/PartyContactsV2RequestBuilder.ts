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
import { PartyContactsV2 } from './PartyContactsV2';

/**
 * Request builder class for operations supported on the {@link PartyContactsV2} entity.
 */
export class PartyContactsV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PartyContactsV2<T>, T> {
  /**
   * Returns a request builder for querying all `PartyContactsV2` entities.
   * @returns A request builder for creating requests to retrieve all `PartyContactsV2` entities.
   */
  getAll(): GetAllRequestBuilder<PartyContactsV2<T>, T> {
    return new GetAllRequestBuilder<PartyContactsV2<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PartyContactsV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PartyContactsV2`.
   */
  create(
    entity: PartyContactsV2<T>
  ): CreateRequestBuilder<PartyContactsV2<T>, T> {
    return new CreateRequestBuilder<PartyContactsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PartyContactsV2` entity based on its keys.
   * @param partyNumber Key property. See {@link PartyContactsV2.partyNumber}.
   * @param electronicAddressId Key property. See {@link PartyContactsV2.electronicAddressId}.
   * @returns A request builder for creating requests to retrieve one `PartyContactsV2` entity based on its keys.
   */
  getByKey(
    partyNumber: DeserializedType<T, 'Edm.String'>,
    electronicAddressId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PartyContactsV2<T>, T> {
    return new GetByKeyRequestBuilder<PartyContactsV2<T>, T>(this.entityApi, {
      PartyNumber: partyNumber,
      ElectronicAddressId: electronicAddressId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PartyContactsV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PartyContactsV2`.
   */
  update(
    entity: PartyContactsV2<T>
  ): UpdateRequestBuilder<PartyContactsV2<T>, T> {
    return new UpdateRequestBuilder<PartyContactsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PartyContactsV2`.
   * @param partyNumber Key property. See {@link PartyContactsV2.partyNumber}.
   * @param electronicAddressId Key property. See {@link PartyContactsV2.electronicAddressId}.
   * @returns A request builder for creating requests that delete an entity of type `PartyContactsV2`.
   */
  delete(
    partyNumber: string,
    electronicAddressId: string
  ): DeleteRequestBuilder<PartyContactsV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PartyContactsV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PartyContactsV2` by taking the entity as a parameter.
   */
  delete(
    entity: PartyContactsV2<T>
  ): DeleteRequestBuilder<PartyContactsV2<T>, T>;
  delete(
    partyNumberOrEntity: any,
    electronicAddressId?: string
  ): DeleteRequestBuilder<PartyContactsV2<T>, T> {
    return new DeleteRequestBuilder<PartyContactsV2<T>, T>(
      this.entityApi,
      partyNumberOrEntity instanceof PartyContactsV2
        ? partyNumberOrEntity
        : {
            PartyNumber: partyNumberOrEntity!,
            ElectronicAddressId: electronicAddressId!
          }
    );
  }
}

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
import { PartyLocationPostalAddressesSalesTaxGroupV2 } from './PartyLocationPostalAddressesSalesTaxGroupV2';

/**
 * Request builder class for operations supported on the {@link PartyLocationPostalAddressesSalesTaxGroupV2} entity.
 */
export class PartyLocationPostalAddressesSalesTaxGroupV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PartyLocationPostalAddressesSalesTaxGroupV2<T>, T> {
  /**
   * Returns a request builder for querying all `PartyLocationPostalAddressesSalesTaxGroupV2` entities.
   * @returns A request builder for creating requests to retrieve all `PartyLocationPostalAddressesSalesTaxGroupV2` entities.
   */
  getAll(): GetAllRequestBuilder<
    PartyLocationPostalAddressesSalesTaxGroupV2<T>,
    T
  > {
    return new GetAllRequestBuilder<
      PartyLocationPostalAddressesSalesTaxGroupV2<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PartyLocationPostalAddressesSalesTaxGroupV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PartyLocationPostalAddressesSalesTaxGroupV2`.
   */
  create(
    entity: PartyLocationPostalAddressesSalesTaxGroupV2<T>
  ): CreateRequestBuilder<PartyLocationPostalAddressesSalesTaxGroupV2<T>, T> {
    return new CreateRequestBuilder<
      PartyLocationPostalAddressesSalesTaxGroupV2<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `PartyLocationPostalAddressesSalesTaxGroupV2` entity based on its keys.
   * @param partyNumber Key property. See {@link PartyLocationPostalAddressesSalesTaxGroupV2.partyNumber}.
   * @param locationId Key property. See {@link PartyLocationPostalAddressesSalesTaxGroupV2.locationId}.
   * @param validFrom Key property. See {@link PartyLocationPostalAddressesSalesTaxGroupV2.validFrom}.
   * @param legalEntity Key property. See {@link PartyLocationPostalAddressesSalesTaxGroupV2.legalEntity}.
   * @returns A request builder for creating requests to retrieve one `PartyLocationPostalAddressesSalesTaxGroupV2` entity based on its keys.
   */
  getByKey(
    partyNumber: DeserializedType<T, 'Edm.String'>,
    locationId: DeserializedType<T, 'Edm.String'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>,
    legalEntity: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PartyLocationPostalAddressesSalesTaxGroupV2<T>, T> {
    return new GetByKeyRequestBuilder<
      PartyLocationPostalAddressesSalesTaxGroupV2<T>,
      T
    >(this.entityApi, {
      PartyNumber: partyNumber,
      LocationId: locationId,
      ValidFrom: validFrom,
      LegalEntity: legalEntity
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PartyLocationPostalAddressesSalesTaxGroupV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PartyLocationPostalAddressesSalesTaxGroupV2`.
   */
  update(
    entity: PartyLocationPostalAddressesSalesTaxGroupV2<T>
  ): UpdateRequestBuilder<PartyLocationPostalAddressesSalesTaxGroupV2<T>, T> {
    return new UpdateRequestBuilder<
      PartyLocationPostalAddressesSalesTaxGroupV2<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PartyLocationPostalAddressesSalesTaxGroupV2`.
   * @param partyNumber Key property. See {@link PartyLocationPostalAddressesSalesTaxGroupV2.partyNumber}.
   * @param locationId Key property. See {@link PartyLocationPostalAddressesSalesTaxGroupV2.locationId}.
   * @param validFrom Key property. See {@link PartyLocationPostalAddressesSalesTaxGroupV2.validFrom}.
   * @param legalEntity Key property. See {@link PartyLocationPostalAddressesSalesTaxGroupV2.legalEntity}.
   * @returns A request builder for creating requests that delete an entity of type `PartyLocationPostalAddressesSalesTaxGroupV2`.
   */
  delete(
    partyNumber: string,
    locationId: string,
    validFrom: Moment,
    legalEntity: string
  ): DeleteRequestBuilder<PartyLocationPostalAddressesSalesTaxGroupV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PartyLocationPostalAddressesSalesTaxGroupV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PartyLocationPostalAddressesSalesTaxGroupV2` by taking the entity as a parameter.
   */
  delete(
    entity: PartyLocationPostalAddressesSalesTaxGroupV2<T>
  ): DeleteRequestBuilder<PartyLocationPostalAddressesSalesTaxGroupV2<T>, T>;
  delete(
    partyNumberOrEntity: any,
    locationId?: string,
    validFrom?: Moment,
    legalEntity?: string
  ): DeleteRequestBuilder<PartyLocationPostalAddressesSalesTaxGroupV2<T>, T> {
    return new DeleteRequestBuilder<
      PartyLocationPostalAddressesSalesTaxGroupV2<T>,
      T
    >(
      this.entityApi,
      partyNumberOrEntity instanceof PartyLocationPostalAddressesSalesTaxGroupV2
        ? partyNumberOrEntity
        : {
            PartyNumber: partyNumberOrEntity!,
            LocationId: locationId!,
            ValidFrom: validFrom!,
            LegalEntity: legalEntity!
          }
    );
  }
}

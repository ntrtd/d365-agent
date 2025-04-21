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
import { RetailStoreTenderTypeCards } from './RetailStoreTenderTypeCards';

/**
 * Request builder class for operations supported on the {@link RetailStoreTenderTypeCards} entity.
 */
export class RetailStoreTenderTypeCardsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailStoreTenderTypeCards<T>, T> {
  /**
   * Returns a request builder for querying all `RetailStoreTenderTypeCards` entities.
   * @returns A request builder for creating requests to retrieve all `RetailStoreTenderTypeCards` entities.
   */
  getAll(): GetAllRequestBuilder<RetailStoreTenderTypeCards<T>, T> {
    return new GetAllRequestBuilder<RetailStoreTenderTypeCards<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailStoreTenderTypeCards` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailStoreTenderTypeCards`.
   */
  create(
    entity: RetailStoreTenderTypeCards<T>
  ): CreateRequestBuilder<RetailStoreTenderTypeCards<T>, T> {
    return new CreateRequestBuilder<RetailStoreTenderTypeCards<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailStoreTenderTypeCards` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailStoreTenderTypeCards.dataAreaId}.
   * @param tenderTypeId Key property. See {@link RetailStoreTenderTypeCards.tenderTypeId}.
   * @param cardTypeId Key property. See {@link RetailStoreTenderTypeCards.cardTypeId}.
   * @param omOperatingUnitNumber Key property. See {@link RetailStoreTenderTypeCards.omOperatingUnitNumber}.
   * @returns A request builder for creating requests to retrieve one `RetailStoreTenderTypeCards` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    tenderTypeId: DeserializedType<T, 'Edm.String'>,
    cardTypeId: DeserializedType<T, 'Edm.String'>,
    omOperatingUnitNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailStoreTenderTypeCards<T>, T> {
    return new GetByKeyRequestBuilder<RetailStoreTenderTypeCards<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TenderTypeId: tenderTypeId,
        CardTypeId: cardTypeId,
        OMOperatingUnitNumber: omOperatingUnitNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailStoreTenderTypeCards`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailStoreTenderTypeCards`.
   */
  update(
    entity: RetailStoreTenderTypeCards<T>
  ): UpdateRequestBuilder<RetailStoreTenderTypeCards<T>, T> {
    return new UpdateRequestBuilder<RetailStoreTenderTypeCards<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailStoreTenderTypeCards`.
   * @param dataAreaId Key property. See {@link RetailStoreTenderTypeCards.dataAreaId}.
   * @param tenderTypeId Key property. See {@link RetailStoreTenderTypeCards.tenderTypeId}.
   * @param cardTypeId Key property. See {@link RetailStoreTenderTypeCards.cardTypeId}.
   * @param omOperatingUnitNumber Key property. See {@link RetailStoreTenderTypeCards.omOperatingUnitNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RetailStoreTenderTypeCards`.
   */
  delete(
    dataAreaId: string,
    tenderTypeId: string,
    cardTypeId: string,
    omOperatingUnitNumber: string
  ): DeleteRequestBuilder<RetailStoreTenderTypeCards<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailStoreTenderTypeCards`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailStoreTenderTypeCards` by taking the entity as a parameter.
   */
  delete(
    entity: RetailStoreTenderTypeCards<T>
  ): DeleteRequestBuilder<RetailStoreTenderTypeCards<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    tenderTypeId?: string,
    cardTypeId?: string,
    omOperatingUnitNumber?: string
  ): DeleteRequestBuilder<RetailStoreTenderTypeCards<T>, T> {
    return new DeleteRequestBuilder<RetailStoreTenderTypeCards<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailStoreTenderTypeCards
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TenderTypeId: tenderTypeId!,
            CardTypeId: cardTypeId!,
            OMOperatingUnitNumber: omOperatingUnitNumber!
          }
    );
  }
}

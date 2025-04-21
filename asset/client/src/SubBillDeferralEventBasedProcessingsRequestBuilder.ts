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
import { SubBillDeferralEventBasedProcessings } from './SubBillDeferralEventBasedProcessings';

/**
 * Request builder class for operations supported on the {@link SubBillDeferralEventBasedProcessings} entity.
 */
export class SubBillDeferralEventBasedProcessingsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SubBillDeferralEventBasedProcessings<T>, T> {
  /**
   * Returns a request builder for querying all `SubBillDeferralEventBasedProcessings` entities.
   * @returns A request builder for creating requests to retrieve all `SubBillDeferralEventBasedProcessings` entities.
   */
  getAll(): GetAllRequestBuilder<SubBillDeferralEventBasedProcessings<T>, T> {
    return new GetAllRequestBuilder<SubBillDeferralEventBasedProcessings<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SubBillDeferralEventBasedProcessings` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SubBillDeferralEventBasedProcessings`.
   */
  create(
    entity: SubBillDeferralEventBasedProcessings<T>
  ): CreateRequestBuilder<SubBillDeferralEventBasedProcessings<T>, T> {
    return new CreateRequestBuilder<SubBillDeferralEventBasedProcessings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SubBillDeferralEventBasedProcessings` entity based on its keys.
   * @param dataAreaId Key property. See {@link SubBillDeferralEventBasedProcessings.dataAreaId}.
   * @param eventDescription Key property. See {@link SubBillDeferralEventBasedProcessings.eventDescription}.
   * @param customerNumber Key property. See {@link SubBillDeferralEventBasedProcessings.customerNumber}.
   * @returns A request builder for creating requests to retrieve one `SubBillDeferralEventBasedProcessings` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    eventDescription: DeserializedType<T, 'Edm.String'>,
    customerNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SubBillDeferralEventBasedProcessings<T>, T> {
    return new GetByKeyRequestBuilder<
      SubBillDeferralEventBasedProcessings<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      EventDescription: eventDescription,
      CustomerNumber: customerNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `SubBillDeferralEventBasedProcessings`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SubBillDeferralEventBasedProcessings`.
   */
  update(
    entity: SubBillDeferralEventBasedProcessings<T>
  ): UpdateRequestBuilder<SubBillDeferralEventBasedProcessings<T>, T> {
    return new UpdateRequestBuilder<SubBillDeferralEventBasedProcessings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SubBillDeferralEventBasedProcessings`.
   * @param dataAreaId Key property. See {@link SubBillDeferralEventBasedProcessings.dataAreaId}.
   * @param eventDescription Key property. See {@link SubBillDeferralEventBasedProcessings.eventDescription}.
   * @param customerNumber Key property. See {@link SubBillDeferralEventBasedProcessings.customerNumber}.
   * @returns A request builder for creating requests that delete an entity of type `SubBillDeferralEventBasedProcessings`.
   */
  delete(
    dataAreaId: string,
    eventDescription: string,
    customerNumber: string
  ): DeleteRequestBuilder<SubBillDeferralEventBasedProcessings<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SubBillDeferralEventBasedProcessings`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SubBillDeferralEventBasedProcessings` by taking the entity as a parameter.
   */
  delete(
    entity: SubBillDeferralEventBasedProcessings<T>
  ): DeleteRequestBuilder<SubBillDeferralEventBasedProcessings<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    eventDescription?: string,
    customerNumber?: string
  ): DeleteRequestBuilder<SubBillDeferralEventBasedProcessings<T>, T> {
    return new DeleteRequestBuilder<SubBillDeferralEventBasedProcessings<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SubBillDeferralEventBasedProcessings
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            EventDescription: eventDescription!,
            CustomerNumber: customerNumber!
          }
    );
  }
}

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
import { PaymentDayLinesCdsV2 } from './PaymentDayLinesCdsV2';

/**
 * Request builder class for operations supported on the {@link PaymentDayLinesCdsV2} entity.
 */
export class PaymentDayLinesCdsV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PaymentDayLinesCdsV2<T>, T> {
  /**
   * Returns a request builder for querying all `PaymentDayLinesCdsV2` entities.
   * @returns A request builder for creating requests to retrieve all `PaymentDayLinesCdsV2` entities.
   */
  getAll(): GetAllRequestBuilder<PaymentDayLinesCdsV2<T>, T> {
    return new GetAllRequestBuilder<PaymentDayLinesCdsV2<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PaymentDayLinesCdsV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PaymentDayLinesCdsV2`.
   */
  create(
    entity: PaymentDayLinesCdsV2<T>
  ): CreateRequestBuilder<PaymentDayLinesCdsV2<T>, T> {
    return new CreateRequestBuilder<PaymentDayLinesCdsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PaymentDayLinesCdsV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link PaymentDayLinesCdsV2.dataAreaId}.
   * @param name Key property. See {@link PaymentDayLinesCdsV2.name}.
   * @param lineNumber Key property. See {@link PaymentDayLinesCdsV2.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `PaymentDayLinesCdsV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    name: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<PaymentDayLinesCdsV2<T>, T> {
    return new GetByKeyRequestBuilder<PaymentDayLinesCdsV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Name: name,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PaymentDayLinesCdsV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PaymentDayLinesCdsV2`.
   */
  update(
    entity: PaymentDayLinesCdsV2<T>
  ): UpdateRequestBuilder<PaymentDayLinesCdsV2<T>, T> {
    return new UpdateRequestBuilder<PaymentDayLinesCdsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PaymentDayLinesCdsV2`.
   * @param dataAreaId Key property. See {@link PaymentDayLinesCdsV2.dataAreaId}.
   * @param name Key property. See {@link PaymentDayLinesCdsV2.name}.
   * @param lineNumber Key property. See {@link PaymentDayLinesCdsV2.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `PaymentDayLinesCdsV2`.
   */
  delete(
    dataAreaId: string,
    name: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<PaymentDayLinesCdsV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PaymentDayLinesCdsV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PaymentDayLinesCdsV2` by taking the entity as a parameter.
   */
  delete(
    entity: PaymentDayLinesCdsV2<T>
  ): DeleteRequestBuilder<PaymentDayLinesCdsV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    name?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<PaymentDayLinesCdsV2<T>, T> {
    return new DeleteRequestBuilder<PaymentDayLinesCdsV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PaymentDayLinesCdsV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Name: name!,
            LineNumber: lineNumber!
          }
    );
  }
}

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
import { SmaServiceOrderLineTransTaxInformations } from './SmaServiceOrderLineTransTaxInformations';

/**
 * Request builder class for operations supported on the {@link SmaServiceOrderLineTransTaxInformations} entity.
 */
export class SmaServiceOrderLineTransTaxInformationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SmaServiceOrderLineTransTaxInformations<T>, T> {
  /**
   * Returns a request builder for querying all `SmaServiceOrderLineTransTaxInformations` entities.
   * @returns A request builder for creating requests to retrieve all `SmaServiceOrderLineTransTaxInformations` entities.
   */
  getAll(): GetAllRequestBuilder<
    SmaServiceOrderLineTransTaxInformations<T>,
    T
  > {
    return new GetAllRequestBuilder<
      SmaServiceOrderLineTransTaxInformations<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SmaServiceOrderLineTransTaxInformations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SmaServiceOrderLineTransTaxInformations`.
   */
  create(
    entity: SmaServiceOrderLineTransTaxInformations<T>
  ): CreateRequestBuilder<SmaServiceOrderLineTransTaxInformations<T>, T> {
    return new CreateRequestBuilder<
      SmaServiceOrderLineTransTaxInformations<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `SmaServiceOrderLineTransTaxInformations` entity based on its keys.
   * @param dataAreaId Key property. See {@link SmaServiceOrderLineTransTaxInformations.dataAreaId}.
   * @param serviceOrderId Key property. See {@link SmaServiceOrderLineTransTaxInformations.serviceOrderId}.
   * @param serviceOrderLineNum Key property. See {@link SmaServiceOrderLineTransTaxInformations.serviceOrderLineNum}.
   * @returns A request builder for creating requests to retrieve one `SmaServiceOrderLineTransTaxInformations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    serviceOrderId: DeserializedType<T, 'Edm.String'>,
    serviceOrderLineNum: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<SmaServiceOrderLineTransTaxInformations<T>, T> {
    return new GetByKeyRequestBuilder<
      SmaServiceOrderLineTransTaxInformations<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      ServiceOrderId: serviceOrderId,
      ServiceOrderLineNum: serviceOrderLineNum
    });
  }

  /**
   * Returns a request builder for updating an entity of type `SmaServiceOrderLineTransTaxInformations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SmaServiceOrderLineTransTaxInformations`.
   */
  update(
    entity: SmaServiceOrderLineTransTaxInformations<T>
  ): UpdateRequestBuilder<SmaServiceOrderLineTransTaxInformations<T>, T> {
    return new UpdateRequestBuilder<
      SmaServiceOrderLineTransTaxInformations<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `SmaServiceOrderLineTransTaxInformations`.
   * @param dataAreaId Key property. See {@link SmaServiceOrderLineTransTaxInformations.dataAreaId}.
   * @param serviceOrderId Key property. See {@link SmaServiceOrderLineTransTaxInformations.serviceOrderId}.
   * @param serviceOrderLineNum Key property. See {@link SmaServiceOrderLineTransTaxInformations.serviceOrderLineNum}.
   * @returns A request builder for creating requests that delete an entity of type `SmaServiceOrderLineTransTaxInformations`.
   */
  delete(
    dataAreaId: string,
    serviceOrderId: string,
    serviceOrderLineNum: BigNumber
  ): DeleteRequestBuilder<SmaServiceOrderLineTransTaxInformations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SmaServiceOrderLineTransTaxInformations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SmaServiceOrderLineTransTaxInformations` by taking the entity as a parameter.
   */
  delete(
    entity: SmaServiceOrderLineTransTaxInformations<T>
  ): DeleteRequestBuilder<SmaServiceOrderLineTransTaxInformations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    serviceOrderId?: string,
    serviceOrderLineNum?: BigNumber
  ): DeleteRequestBuilder<SmaServiceOrderLineTransTaxInformations<T>, T> {
    return new DeleteRequestBuilder<
      SmaServiceOrderLineTransTaxInformations<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof SmaServiceOrderLineTransTaxInformations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ServiceOrderId: serviceOrderId!,
            ServiceOrderLineNum: serviceOrderLineNum!
          }
    );
  }
}

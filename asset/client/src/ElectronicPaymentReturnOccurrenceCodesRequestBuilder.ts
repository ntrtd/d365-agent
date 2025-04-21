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
import { ElectronicPaymentReturnOccurrenceCodes } from './ElectronicPaymentReturnOccurrenceCodes';

/**
 * Request builder class for operations supported on the {@link ElectronicPaymentReturnOccurrenceCodes} entity.
 */
export class ElectronicPaymentReturnOccurrenceCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ElectronicPaymentReturnOccurrenceCodes<T>, T> {
  /**
   * Returns a request builder for querying all `ElectronicPaymentReturnOccurrenceCodes` entities.
   * @returns A request builder for creating requests to retrieve all `ElectronicPaymentReturnOccurrenceCodes` entities.
   */
  getAll(): GetAllRequestBuilder<ElectronicPaymentReturnOccurrenceCodes<T>, T> {
    return new GetAllRequestBuilder<
      ElectronicPaymentReturnOccurrenceCodes<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ElectronicPaymentReturnOccurrenceCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ElectronicPaymentReturnOccurrenceCodes`.
   */
  create(
    entity: ElectronicPaymentReturnOccurrenceCodes<T>
  ): CreateRequestBuilder<ElectronicPaymentReturnOccurrenceCodes<T>, T> {
    return new CreateRequestBuilder<
      ElectronicPaymentReturnOccurrenceCodes<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `ElectronicPaymentReturnOccurrenceCodes` entity based on its keys.
   * @param dataAreaId Key property. See {@link ElectronicPaymentReturnOccurrenceCodes.dataAreaId}.
   * @param layoutGroupId Key property. See {@link ElectronicPaymentReturnOccurrenceCodes.layoutGroupId}.
   * @param layoutReturnOccurrenceCode Key property. See {@link ElectronicPaymentReturnOccurrenceCodes.layoutReturnOccurrenceCode}.
   * @returns A request builder for creating requests to retrieve one `ElectronicPaymentReturnOccurrenceCodes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    layoutGroupId: DeserializedType<T, 'Edm.String'>,
    layoutReturnOccurrenceCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ElectronicPaymentReturnOccurrenceCodes<T>, T> {
    return new GetByKeyRequestBuilder<
      ElectronicPaymentReturnOccurrenceCodes<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      LayoutGroupId: layoutGroupId,
      LayoutReturnOccurrenceCode: layoutReturnOccurrenceCode
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ElectronicPaymentReturnOccurrenceCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ElectronicPaymentReturnOccurrenceCodes`.
   */
  update(
    entity: ElectronicPaymentReturnOccurrenceCodes<T>
  ): UpdateRequestBuilder<ElectronicPaymentReturnOccurrenceCodes<T>, T> {
    return new UpdateRequestBuilder<
      ElectronicPaymentReturnOccurrenceCodes<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ElectronicPaymentReturnOccurrenceCodes`.
   * @param dataAreaId Key property. See {@link ElectronicPaymentReturnOccurrenceCodes.dataAreaId}.
   * @param layoutGroupId Key property. See {@link ElectronicPaymentReturnOccurrenceCodes.layoutGroupId}.
   * @param layoutReturnOccurrenceCode Key property. See {@link ElectronicPaymentReturnOccurrenceCodes.layoutReturnOccurrenceCode}.
   * @returns A request builder for creating requests that delete an entity of type `ElectronicPaymentReturnOccurrenceCodes`.
   */
  delete(
    dataAreaId: string,
    layoutGroupId: string,
    layoutReturnOccurrenceCode: string
  ): DeleteRequestBuilder<ElectronicPaymentReturnOccurrenceCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ElectronicPaymentReturnOccurrenceCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ElectronicPaymentReturnOccurrenceCodes` by taking the entity as a parameter.
   */
  delete(
    entity: ElectronicPaymentReturnOccurrenceCodes<T>
  ): DeleteRequestBuilder<ElectronicPaymentReturnOccurrenceCodes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    layoutGroupId?: string,
    layoutReturnOccurrenceCode?: string
  ): DeleteRequestBuilder<ElectronicPaymentReturnOccurrenceCodes<T>, T> {
    return new DeleteRequestBuilder<
      ElectronicPaymentReturnOccurrenceCodes<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof ElectronicPaymentReturnOccurrenceCodes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LayoutGroupId: layoutGroupId!,
            LayoutReturnOccurrenceCode: layoutReturnOccurrenceCode!
          }
    );
  }
}

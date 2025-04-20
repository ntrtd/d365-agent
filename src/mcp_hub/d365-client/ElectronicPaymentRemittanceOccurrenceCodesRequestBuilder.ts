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
import { ElectronicPaymentRemittanceOccurrenceCodes } from './ElectronicPaymentRemittanceOccurrenceCodes';

/**
 * Request builder class for operations supported on the {@link ElectronicPaymentRemittanceOccurrenceCodes} entity.
 */
export class ElectronicPaymentRemittanceOccurrenceCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ElectronicPaymentRemittanceOccurrenceCodes<T>, T> {
  /**
   * Returns a request builder for querying all `ElectronicPaymentRemittanceOccurrenceCodes` entities.
   * @returns A request builder for creating requests to retrieve all `ElectronicPaymentRemittanceOccurrenceCodes` entities.
   */
  getAll(): GetAllRequestBuilder<
    ElectronicPaymentRemittanceOccurrenceCodes<T>,
    T
  > {
    return new GetAllRequestBuilder<
      ElectronicPaymentRemittanceOccurrenceCodes<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ElectronicPaymentRemittanceOccurrenceCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ElectronicPaymentRemittanceOccurrenceCodes`.
   */
  create(
    entity: ElectronicPaymentRemittanceOccurrenceCodes<T>
  ): CreateRequestBuilder<ElectronicPaymentRemittanceOccurrenceCodes<T>, T> {
    return new CreateRequestBuilder<
      ElectronicPaymentRemittanceOccurrenceCodes<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `ElectronicPaymentRemittanceOccurrenceCodes` entity based on its keys.
   * @param dataAreaId Key property. See {@link ElectronicPaymentRemittanceOccurrenceCodes.dataAreaId}.
   * @param layoutGroupId Key property. See {@link ElectronicPaymentRemittanceOccurrenceCodes.layoutGroupId}.
   * @param layoutRemittanceOccurrenceCode Key property. See {@link ElectronicPaymentRemittanceOccurrenceCodes.layoutRemittanceOccurrenceCode}.
   * @returns A request builder for creating requests to retrieve one `ElectronicPaymentRemittanceOccurrenceCodes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    layoutGroupId: DeserializedType<T, 'Edm.String'>,
    layoutRemittanceOccurrenceCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ElectronicPaymentRemittanceOccurrenceCodes<T>, T> {
    return new GetByKeyRequestBuilder<
      ElectronicPaymentRemittanceOccurrenceCodes<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      LayoutGroupId: layoutGroupId,
      LayoutRemittanceOccurrenceCode: layoutRemittanceOccurrenceCode
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ElectronicPaymentRemittanceOccurrenceCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ElectronicPaymentRemittanceOccurrenceCodes`.
   */
  update(
    entity: ElectronicPaymentRemittanceOccurrenceCodes<T>
  ): UpdateRequestBuilder<ElectronicPaymentRemittanceOccurrenceCodes<T>, T> {
    return new UpdateRequestBuilder<
      ElectronicPaymentRemittanceOccurrenceCodes<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ElectronicPaymentRemittanceOccurrenceCodes`.
   * @param dataAreaId Key property. See {@link ElectronicPaymentRemittanceOccurrenceCodes.dataAreaId}.
   * @param layoutGroupId Key property. See {@link ElectronicPaymentRemittanceOccurrenceCodes.layoutGroupId}.
   * @param layoutRemittanceOccurrenceCode Key property. See {@link ElectronicPaymentRemittanceOccurrenceCodes.layoutRemittanceOccurrenceCode}.
   * @returns A request builder for creating requests that delete an entity of type `ElectronicPaymentRemittanceOccurrenceCodes`.
   */
  delete(
    dataAreaId: string,
    layoutGroupId: string,
    layoutRemittanceOccurrenceCode: string
  ): DeleteRequestBuilder<ElectronicPaymentRemittanceOccurrenceCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ElectronicPaymentRemittanceOccurrenceCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ElectronicPaymentRemittanceOccurrenceCodes` by taking the entity as a parameter.
   */
  delete(
    entity: ElectronicPaymentRemittanceOccurrenceCodes<T>
  ): DeleteRequestBuilder<ElectronicPaymentRemittanceOccurrenceCodes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    layoutGroupId?: string,
    layoutRemittanceOccurrenceCode?: string
  ): DeleteRequestBuilder<ElectronicPaymentRemittanceOccurrenceCodes<T>, T> {
    return new DeleteRequestBuilder<
      ElectronicPaymentRemittanceOccurrenceCodes<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof ElectronicPaymentRemittanceOccurrenceCodes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LayoutGroupId: layoutGroupId!,
            LayoutRemittanceOccurrenceCode: layoutRemittanceOccurrenceCode!
          }
    );
  }
}

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
import { BillingCodeCustomFields } from './BillingCodeCustomFields';

/**
 * Request builder class for operations supported on the {@link BillingCodeCustomFields} entity.
 */
export class BillingCodeCustomFieldsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BillingCodeCustomFields<T>, T> {
  /**
   * Returns a request builder for querying all `BillingCodeCustomFields` entities.
   * @returns A request builder for creating requests to retrieve all `BillingCodeCustomFields` entities.
   */
  getAll(): GetAllRequestBuilder<BillingCodeCustomFields<T>, T> {
    return new GetAllRequestBuilder<BillingCodeCustomFields<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BillingCodeCustomFields` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BillingCodeCustomFields`.
   */
  create(
    entity: BillingCodeCustomFields<T>
  ): CreateRequestBuilder<BillingCodeCustomFields<T>, T> {
    return new CreateRequestBuilder<BillingCodeCustomFields<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BillingCodeCustomFields` entity based on its keys.
   * @param dataAreaId Key property. See {@link BillingCodeCustomFields.dataAreaId}.
   * @param customField Key property. See {@link BillingCodeCustomFields.customField}.
   * @param validTo Key property. See {@link BillingCodeCustomFields.validTo}.
   * @param validFrom Key property. See {@link BillingCodeCustomFields.validFrom}.
   * @param billingCode Key property. See {@link BillingCodeCustomFields.billingCode}.
   * @returns A request builder for creating requests to retrieve one `BillingCodeCustomFields` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    customField: DeserializedType<T, 'Edm.String'>,
    validTo: DeserializedType<T, 'Edm.DateTimeOffset'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>,
    billingCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BillingCodeCustomFields<T>, T> {
    return new GetByKeyRequestBuilder<BillingCodeCustomFields<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        CustomField: customField,
        ValidTo: validTo,
        ValidFrom: validFrom,
        BillingCode: billingCode
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BillingCodeCustomFields`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BillingCodeCustomFields`.
   */
  update(
    entity: BillingCodeCustomFields<T>
  ): UpdateRequestBuilder<BillingCodeCustomFields<T>, T> {
    return new UpdateRequestBuilder<BillingCodeCustomFields<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BillingCodeCustomFields`.
   * @param dataAreaId Key property. See {@link BillingCodeCustomFields.dataAreaId}.
   * @param customField Key property. See {@link BillingCodeCustomFields.customField}.
   * @param validTo Key property. See {@link BillingCodeCustomFields.validTo}.
   * @param validFrom Key property. See {@link BillingCodeCustomFields.validFrom}.
   * @param billingCode Key property. See {@link BillingCodeCustomFields.billingCode}.
   * @returns A request builder for creating requests that delete an entity of type `BillingCodeCustomFields`.
   */
  delete(
    dataAreaId: string,
    customField: string,
    validTo: Moment,
    validFrom: Moment,
    billingCode: string
  ): DeleteRequestBuilder<BillingCodeCustomFields<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BillingCodeCustomFields`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BillingCodeCustomFields` by taking the entity as a parameter.
   */
  delete(
    entity: BillingCodeCustomFields<T>
  ): DeleteRequestBuilder<BillingCodeCustomFields<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    customField?: string,
    validTo?: Moment,
    validFrom?: Moment,
    billingCode?: string
  ): DeleteRequestBuilder<BillingCodeCustomFields<T>, T> {
    return new DeleteRequestBuilder<BillingCodeCustomFields<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BillingCodeCustomFields
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CustomField: customField!,
            ValidTo: validTo!,
            ValidFrom: validFrom!,
            BillingCode: billingCode!
          }
    );
  }
}

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
import { BillingCodeAccountingDistributions } from './BillingCodeAccountingDistributions';

/**
 * Request builder class for operations supported on the {@link BillingCodeAccountingDistributions} entity.
 */
export class BillingCodeAccountingDistributionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BillingCodeAccountingDistributions<T>, T> {
  /**
   * Returns a request builder for querying all `BillingCodeAccountingDistributions` entities.
   * @returns A request builder for creating requests to retrieve all `BillingCodeAccountingDistributions` entities.
   */
  getAll(): GetAllRequestBuilder<BillingCodeAccountingDistributions<T>, T> {
    return new GetAllRequestBuilder<BillingCodeAccountingDistributions<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BillingCodeAccountingDistributions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BillingCodeAccountingDistributions`.
   */
  create(
    entity: BillingCodeAccountingDistributions<T>
  ): CreateRequestBuilder<BillingCodeAccountingDistributions<T>, T> {
    return new CreateRequestBuilder<BillingCodeAccountingDistributions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BillingCodeAccountingDistributions` entity based on its keys.
   * @param dataAreaId Key property. See {@link BillingCodeAccountingDistributions.dataAreaId}.
   * @param validTo Key property. See {@link BillingCodeAccountingDistributions.validTo}.
   * @param validFrom Key property. See {@link BillingCodeAccountingDistributions.validFrom}.
   * @param billingCode Key property. See {@link BillingCodeAccountingDistributions.billingCode}.
   * @param ledgerAccountDisplayValue Key property. See {@link BillingCodeAccountingDistributions.ledgerAccountDisplayValue}.
   * @returns A request builder for creating requests to retrieve one `BillingCodeAccountingDistributions` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    validTo: DeserializedType<T, 'Edm.DateTimeOffset'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>,
    billingCode: DeserializedType<T, 'Edm.String'>,
    ledgerAccountDisplayValue: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BillingCodeAccountingDistributions<T>, T> {
    return new GetByKeyRequestBuilder<BillingCodeAccountingDistributions<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ValidTo: validTo,
        ValidFrom: validFrom,
        BillingCode: billingCode,
        LedgerAccountDisplayValue: ledgerAccountDisplayValue
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BillingCodeAccountingDistributions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BillingCodeAccountingDistributions`.
   */
  update(
    entity: BillingCodeAccountingDistributions<T>
  ): UpdateRequestBuilder<BillingCodeAccountingDistributions<T>, T> {
    return new UpdateRequestBuilder<BillingCodeAccountingDistributions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BillingCodeAccountingDistributions`.
   * @param dataAreaId Key property. See {@link BillingCodeAccountingDistributions.dataAreaId}.
   * @param validTo Key property. See {@link BillingCodeAccountingDistributions.validTo}.
   * @param validFrom Key property. See {@link BillingCodeAccountingDistributions.validFrom}.
   * @param billingCode Key property. See {@link BillingCodeAccountingDistributions.billingCode}.
   * @param ledgerAccountDisplayValue Key property. See {@link BillingCodeAccountingDistributions.ledgerAccountDisplayValue}.
   * @returns A request builder for creating requests that delete an entity of type `BillingCodeAccountingDistributions`.
   */
  delete(
    dataAreaId: string,
    validTo: Moment,
    validFrom: Moment,
    billingCode: string,
    ledgerAccountDisplayValue: string
  ): DeleteRequestBuilder<BillingCodeAccountingDistributions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BillingCodeAccountingDistributions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BillingCodeAccountingDistributions` by taking the entity as a parameter.
   */
  delete(
    entity: BillingCodeAccountingDistributions<T>
  ): DeleteRequestBuilder<BillingCodeAccountingDistributions<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    validTo?: Moment,
    validFrom?: Moment,
    billingCode?: string,
    ledgerAccountDisplayValue?: string
  ): DeleteRequestBuilder<BillingCodeAccountingDistributions<T>, T> {
    return new DeleteRequestBuilder<BillingCodeAccountingDistributions<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BillingCodeAccountingDistributions
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ValidTo: validTo!,
            ValidFrom: validFrom!,
            BillingCode: billingCode!,
            LedgerAccountDisplayValue: ledgerAccountDisplayValue!
          }
    );
  }
}

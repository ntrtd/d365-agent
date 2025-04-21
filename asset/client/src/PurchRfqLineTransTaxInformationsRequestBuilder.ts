/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  GetAllRequestBuilder,
  RequestBuilder
} from '@sap-cloud-sdk/odata-v4';
import { PurchRfqLineTransTaxInformations } from './PurchRfqLineTransTaxInformations';

/**
 * Request builder class for operations supported on the {@link PurchRfqLineTransTaxInformations} entity.
 */
export class PurchRfqLineTransTaxInformationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PurchRfqLineTransTaxInformations<T>, T> {
  /**
   * Returns a request builder for querying all `PurchRfqLineTransTaxInformations` entities.
   * @returns A request builder for creating requests to retrieve all `PurchRfqLineTransTaxInformations` entities.
   */
  getAll(): GetAllRequestBuilder<PurchRfqLineTransTaxInformations<T>, T> {
    return new GetAllRequestBuilder<PurchRfqLineTransTaxInformations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PurchRfqLineTransTaxInformations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PurchRfqLineTransTaxInformations`.
   */
  create(
    entity: PurchRfqLineTransTaxInformations<T>
  ): CreateRequestBuilder<PurchRfqLineTransTaxInformations<T>, T> {
    return new CreateRequestBuilder<PurchRfqLineTransTaxInformations<T>, T>(
      this.entityApi,
      entity
    );
  }
}

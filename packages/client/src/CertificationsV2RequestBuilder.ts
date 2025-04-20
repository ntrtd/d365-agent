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
import { CertificationsV2 } from './CertificationsV2';

/**
 * Request builder class for operations supported on the {@link CertificationsV2} entity.
 */
export class CertificationsV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CertificationsV2<T>, T> {
  /**
   * Returns a request builder for querying all `CertificationsV2` entities.
   * @returns A request builder for creating requests to retrieve all `CertificationsV2` entities.
   */
  getAll(): GetAllRequestBuilder<CertificationsV2<T>, T> {
    return new GetAllRequestBuilder<CertificationsV2<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CertificationsV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CertificationsV2`.
   */
  create(
    entity: CertificationsV2<T>
  ): CreateRequestBuilder<CertificationsV2<T>, T> {
    return new CreateRequestBuilder<CertificationsV2<T>, T>(
      this.entityApi,
      entity
    );
  }
}

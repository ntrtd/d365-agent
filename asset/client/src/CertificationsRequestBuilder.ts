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
import { Certifications } from './Certifications';

/**
 * Request builder class for operations supported on the {@link Certifications} entity.
 */
export class CertificationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Certifications<T>, T> {
  /**
   * Returns a request builder for querying all `Certifications` entities.
   * @returns A request builder for creating requests to retrieve all `Certifications` entities.
   */
  getAll(): GetAllRequestBuilder<Certifications<T>, T> {
    return new GetAllRequestBuilder<Certifications<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Certifications` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Certifications`.
   */
  create(
    entity: Certifications<T>
  ): CreateRequestBuilder<Certifications<T>, T> {
    return new CreateRequestBuilder<Certifications<T>, T>(
      this.entityApi,
      entity
    );
  }
}

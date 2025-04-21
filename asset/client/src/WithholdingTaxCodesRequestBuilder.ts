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
import { WithholdingTaxCodes } from './WithholdingTaxCodes';

/**
 * Request builder class for operations supported on the {@link WithholdingTaxCodes} entity.
 */
export class WithholdingTaxCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WithholdingTaxCodes<T>, T> {
  /**
   * Returns a request builder for querying all `WithholdingTaxCodes` entities.
   * @returns A request builder for creating requests to retrieve all `WithholdingTaxCodes` entities.
   */
  getAll(): GetAllRequestBuilder<WithholdingTaxCodes<T>, T> {
    return new GetAllRequestBuilder<WithholdingTaxCodes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `WithholdingTaxCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WithholdingTaxCodes`.
   */
  create(
    entity: WithholdingTaxCodes<T>
  ): CreateRequestBuilder<WithholdingTaxCodes<T>, T> {
    return new CreateRequestBuilder<WithholdingTaxCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WithholdingTaxCodes` entity based on its keys.
   * @param dataAreaId Key property. See {@link WithholdingTaxCodes.dataAreaId}.
   * @param withholdingCode Key property. See {@link WithholdingTaxCodes.withholdingCode}.
   * @returns A request builder for creating requests to retrieve one `WithholdingTaxCodes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    withholdingCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WithholdingTaxCodes<T>, T> {
    return new GetByKeyRequestBuilder<WithholdingTaxCodes<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        WithholdingCode: withholdingCode
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WithholdingTaxCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WithholdingTaxCodes`.
   */
  update(
    entity: WithholdingTaxCodes<T>
  ): UpdateRequestBuilder<WithholdingTaxCodes<T>, T> {
    return new UpdateRequestBuilder<WithholdingTaxCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WithholdingTaxCodes`.
   * @param dataAreaId Key property. See {@link WithholdingTaxCodes.dataAreaId}.
   * @param withholdingCode Key property. See {@link WithholdingTaxCodes.withholdingCode}.
   * @returns A request builder for creating requests that delete an entity of type `WithholdingTaxCodes`.
   */
  delete(
    dataAreaId: string,
    withholdingCode: string
  ): DeleteRequestBuilder<WithholdingTaxCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WithholdingTaxCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WithholdingTaxCodes` by taking the entity as a parameter.
   */
  delete(
    entity: WithholdingTaxCodes<T>
  ): DeleteRequestBuilder<WithholdingTaxCodes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    withholdingCode?: string
  ): DeleteRequestBuilder<WithholdingTaxCodes<T>, T> {
    return new DeleteRequestBuilder<WithholdingTaxCodes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof WithholdingTaxCodes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            WithholdingCode: withholdingCode!
          }
    );
  }
}

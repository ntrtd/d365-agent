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
import { FbGeneralAdjustmentCodeLedgers } from './FbGeneralAdjustmentCodeLedgers';

/**
 * Request builder class for operations supported on the {@link FbGeneralAdjustmentCodeLedgers} entity.
 */
export class FbGeneralAdjustmentCodeLedgersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FbGeneralAdjustmentCodeLedgers<T>, T> {
  /**
   * Returns a request builder for querying all `FbGeneralAdjustmentCodeLedgers` entities.
   * @returns A request builder for creating requests to retrieve all `FbGeneralAdjustmentCodeLedgers` entities.
   */
  getAll(): GetAllRequestBuilder<FbGeneralAdjustmentCodeLedgers<T>, T> {
    return new GetAllRequestBuilder<FbGeneralAdjustmentCodeLedgers<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `FbGeneralAdjustmentCodeLedgers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FbGeneralAdjustmentCodeLedgers`.
   */
  create(
    entity: FbGeneralAdjustmentCodeLedgers<T>
  ): CreateRequestBuilder<FbGeneralAdjustmentCodeLedgers<T>, T> {
    return new CreateRequestBuilder<FbGeneralAdjustmentCodeLedgers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `FbGeneralAdjustmentCodeLedgers` entity based on its keys.
   * @param fbGeneralAdjustmentCodeIdentification Key property. See {@link FbGeneralAdjustmentCodeLedgers.fbGeneralAdjustmentCodeIdentification}.
   * @param company Key property. See {@link FbGeneralAdjustmentCodeLedgers.company}.
   * @returns A request builder for creating requests to retrieve one `FbGeneralAdjustmentCodeLedgers` entity based on its keys.
   */
  getByKey(
    fbGeneralAdjustmentCodeIdentification: DeserializedType<T, 'Edm.String'>,
    company: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<FbGeneralAdjustmentCodeLedgers<T>, T> {
    return new GetByKeyRequestBuilder<FbGeneralAdjustmentCodeLedgers<T>, T>(
      this.entityApi,
      {
        FBGeneralAdjustmentCodeIdentification:
          fbGeneralAdjustmentCodeIdentification,
        Company: company
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `FbGeneralAdjustmentCodeLedgers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FbGeneralAdjustmentCodeLedgers`.
   */
  update(
    entity: FbGeneralAdjustmentCodeLedgers<T>
  ): UpdateRequestBuilder<FbGeneralAdjustmentCodeLedgers<T>, T> {
    return new UpdateRequestBuilder<FbGeneralAdjustmentCodeLedgers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `FbGeneralAdjustmentCodeLedgers`.
   * @param fbGeneralAdjustmentCodeIdentification Key property. See {@link FbGeneralAdjustmentCodeLedgers.fbGeneralAdjustmentCodeIdentification}.
   * @param company Key property. See {@link FbGeneralAdjustmentCodeLedgers.company}.
   * @returns A request builder for creating requests that delete an entity of type `FbGeneralAdjustmentCodeLedgers`.
   */
  delete(
    fbGeneralAdjustmentCodeIdentification: string,
    company: string
  ): DeleteRequestBuilder<FbGeneralAdjustmentCodeLedgers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FbGeneralAdjustmentCodeLedgers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FbGeneralAdjustmentCodeLedgers` by taking the entity as a parameter.
   */
  delete(
    entity: FbGeneralAdjustmentCodeLedgers<T>
  ): DeleteRequestBuilder<FbGeneralAdjustmentCodeLedgers<T>, T>;
  delete(
    fbGeneralAdjustmentCodeIdentificationOrEntity: any,
    company?: string
  ): DeleteRequestBuilder<FbGeneralAdjustmentCodeLedgers<T>, T> {
    return new DeleteRequestBuilder<FbGeneralAdjustmentCodeLedgers<T>, T>(
      this.entityApi,
      fbGeneralAdjustmentCodeIdentificationOrEntity instanceof
      FbGeneralAdjustmentCodeLedgers
        ? fbGeneralAdjustmentCodeIdentificationOrEntity
        : {
            FBGeneralAdjustmentCodeIdentification:
              fbGeneralAdjustmentCodeIdentificationOrEntity!,
            Company: company!
          }
    );
  }
}

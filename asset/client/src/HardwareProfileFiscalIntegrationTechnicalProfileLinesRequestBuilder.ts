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
import { HardwareProfileFiscalIntegrationTechnicalProfileLines } from './HardwareProfileFiscalIntegrationTechnicalProfileLines';

/**
 * Request builder class for operations supported on the {@link HardwareProfileFiscalIntegrationTechnicalProfileLines} entity.
 */
export class HardwareProfileFiscalIntegrationTechnicalProfileLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  HardwareProfileFiscalIntegrationTechnicalProfileLines<T>,
  T
> {
  /**
   * Returns a request builder for querying all `HardwareProfileFiscalIntegrationTechnicalProfileLines` entities.
   * @returns A request builder for creating requests to retrieve all `HardwareProfileFiscalIntegrationTechnicalProfileLines` entities.
   */
  getAll(): GetAllRequestBuilder<
    HardwareProfileFiscalIntegrationTechnicalProfileLines<T>,
    T
  > {
    return new GetAllRequestBuilder<
      HardwareProfileFiscalIntegrationTechnicalProfileLines<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `HardwareProfileFiscalIntegrationTechnicalProfileLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `HardwareProfileFiscalIntegrationTechnicalProfileLines`.
   */
  create(
    entity: HardwareProfileFiscalIntegrationTechnicalProfileLines<T>
  ): CreateRequestBuilder<
    HardwareProfileFiscalIntegrationTechnicalProfileLines<T>,
    T
  > {
    return new CreateRequestBuilder<
      HardwareProfileFiscalIntegrationTechnicalProfileLines<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `HardwareProfileFiscalIntegrationTechnicalProfileLines` entity based on its keys.
   * @param hardwareProfileId Key property. See {@link HardwareProfileFiscalIntegrationTechnicalProfileLines.hardwareProfileId}.
   * @param fiscalTechnicalProfileId Key property. See {@link HardwareProfileFiscalIntegrationTechnicalProfileLines.fiscalTechnicalProfileId}.
   * @returns A request builder for creating requests to retrieve one `HardwareProfileFiscalIntegrationTechnicalProfileLines` entity based on its keys.
   */
  getByKey(
    hardwareProfileId: DeserializedType<T, 'Edm.String'>,
    fiscalTechnicalProfileId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    HardwareProfileFiscalIntegrationTechnicalProfileLines<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      HardwareProfileFiscalIntegrationTechnicalProfileLines<T>,
      T
    >(this.entityApi, {
      HardwareProfileId: hardwareProfileId,
      FiscalTechnicalProfileId: fiscalTechnicalProfileId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `HardwareProfileFiscalIntegrationTechnicalProfileLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `HardwareProfileFiscalIntegrationTechnicalProfileLines`.
   */
  update(
    entity: HardwareProfileFiscalIntegrationTechnicalProfileLines<T>
  ): UpdateRequestBuilder<
    HardwareProfileFiscalIntegrationTechnicalProfileLines<T>,
    T
  > {
    return new UpdateRequestBuilder<
      HardwareProfileFiscalIntegrationTechnicalProfileLines<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `HardwareProfileFiscalIntegrationTechnicalProfileLines`.
   * @param hardwareProfileId Key property. See {@link HardwareProfileFiscalIntegrationTechnicalProfileLines.hardwareProfileId}.
   * @param fiscalTechnicalProfileId Key property. See {@link HardwareProfileFiscalIntegrationTechnicalProfileLines.fiscalTechnicalProfileId}.
   * @returns A request builder for creating requests that delete an entity of type `HardwareProfileFiscalIntegrationTechnicalProfileLines`.
   */
  delete(
    hardwareProfileId: string,
    fiscalTechnicalProfileId: string
  ): DeleteRequestBuilder<
    HardwareProfileFiscalIntegrationTechnicalProfileLines<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `HardwareProfileFiscalIntegrationTechnicalProfileLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `HardwareProfileFiscalIntegrationTechnicalProfileLines` by taking the entity as a parameter.
   */
  delete(
    entity: HardwareProfileFiscalIntegrationTechnicalProfileLines<T>
  ): DeleteRequestBuilder<
    HardwareProfileFiscalIntegrationTechnicalProfileLines<T>,
    T
  >;
  delete(
    hardwareProfileIdOrEntity: any,
    fiscalTechnicalProfileId?: string
  ): DeleteRequestBuilder<
    HardwareProfileFiscalIntegrationTechnicalProfileLines<T>,
    T
  > {
    return new DeleteRequestBuilder<
      HardwareProfileFiscalIntegrationTechnicalProfileLines<T>,
      T
    >(
      this.entityApi,
      hardwareProfileIdOrEntity instanceof
      HardwareProfileFiscalIntegrationTechnicalProfileLines
        ? hardwareProfileIdOrEntity
        : {
            HardwareProfileId: hardwareProfileIdOrEntity!,
            FiscalTechnicalProfileId: fiscalTechnicalProfileId!
          }
    );
  }
}

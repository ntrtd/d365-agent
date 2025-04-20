/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { SalesTableBrBiEntitiesApi } from './SalesTableBrBiEntitiesApi';
import { NoYes } from './NoYes';
import { EfDocPresenceTypeBr } from './EfDocPresenceTypeBr';

/**
 * This class represents the entity "SalesTableBRBiEntities" of service "d365_metadata".
 */
export class SalesTableBrBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SalesTableBrBiEntitiesType<T>
{
  /**
   * Technical entity name for SalesTableBrBiEntities.
   */
  static override _entityName = 'SalesTableBRBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SalesTableBrBiEntities entity.
   */
  static _keys = ['dataAreaId', 'SourceKey'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Third Party Sales Digital Platform.
   * @nullable
   */
  declare thirdPartySalesDigitalPlatform?: NoYes | null;
  /**
   * Service Code On Dlv Address Br.
   * @nullable
   */
  declare serviceCodeOnDlvAddressBr?: NoYes | null;
  /**
   * Third Party Sales Digital Platform Cnpj.
   * @nullable
   */
  declare thirdPartySalesDigitalPlatformCnpj?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Interest Code Br.
   * @nullable
   */
  declare interestCodeBr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fine Code Br.
   * @nullable
   */
  declare fineCodeBr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cfps Id Br.
   * @nullable
   */
  declare cfpsIdBr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Presence Type.
   * @nullable
   */
  declare presenceType?: EfDocPresenceTypeBr | null;
  /**
   * Cust Final User Br.
   * @nullable
   */
  declare custFinalUserBr?: NoYes | null;
  /**
   * Tax Service Code Br.
   * @nullable
   */
  declare taxServiceCodeBr?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: SalesTableBrBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface SalesTableBrBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  thirdPartySalesDigitalPlatform?: NoYes | null;
  serviceCodeOnDlvAddressBr?: NoYes | null;
  thirdPartySalesDigitalPlatformCnpj?: DeserializedType<T, 'Edm.String'> | null;
  interestCodeBr?: DeserializedType<T, 'Edm.String'> | null;
  fineCodeBr?: DeserializedType<T, 'Edm.String'> | null;
  cfpsIdBr?: DeserializedType<T, 'Edm.String'> | null;
  presenceType?: EfDocPresenceTypeBr | null;
  custFinalUserBr?: NoYes | null;
  taxServiceCodeBr?: DeserializedType<T, 'Edm.String'> | null;
}

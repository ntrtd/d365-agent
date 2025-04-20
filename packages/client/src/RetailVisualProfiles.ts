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
import type { RetailVisualProfilesApi } from './RetailVisualProfilesApi';
import { NoYes } from './NoYes';
import { DefaultSearchResultDisplayView } from './DefaultSearchResultDisplayView';
import { RetailFontScheme } from './RetailFontScheme';
import { RetailTerminals, RetailTerminalsType } from './RetailTerminals';

/**
 * This class represents the entity "RetailVisualProfiles" of service "d365_metadata".
 */
export class RetailVisualProfiles<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailVisualProfilesType<T>
{
  /**
   * Technical entity name for RetailVisualProfiles.
   */
  static override _entityName = 'RetailVisualProfiles';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailVisualProfiles entity.
   */
  static _keys = ['ProfileId'];
  /**
   * Profile Id.
   */
  declare profileId: DeserializedType<T, 'Edm.String'>;
  /**
   * Show Application Bar Label.
   * @nullable
   */
  declare showApplicationBarLabel?: NoYes | null;
  /**
   * Picture Id Portrait.
   */
  declare pictureIdPortrait: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Screen Height.
   */
  declare screenHeight: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Show Date Time.
   * @nullable
   */
  declare showDateTime?: NoYes | null;
  /**
   * Skin File.
   * @nullable
   */
  declare skinFile?: DeserializedType<T, 'Edm.Binary'> | null;
  /**
   * Pallet.
   * @nullable
   */
  declare pallet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Show Product Configuration Id.
   * @nullable
   */
  declare showProductConfigurationId?: NoYes | null;
  /**
   * Default Search Result Display View.
   * @nullable
   */
  declare defaultSearchResultDisplayView?: DefaultSearchResultDisplayView | null;
  /**
   * Background Picture Id.
   */
  declare backgroundPictureId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Pos Skin Name.
   * @nullable
   */
  declare posSkinName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Design Allowed On Pos.
   * @nullable
   */
  declare designAllowedOnPos?: NoYes | null;
  /**
   * Retail Bypass Item Added Dialog.
   * @nullable
   */
  declare retailBypassItemAddedDialog?: NoYes | null;
  /**
   * Retail Device Type Id.
   */
  declare retailDeviceTypeId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Picture Id.
   */
  declare pictureId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Hide Cursor.
   * @nullable
   */
  declare hideCursor?: NoYes | null;
  /**
   * Screen Width.
   */
  declare screenWidth: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Full Screen Mode.
   * @nullable
   */
  declare fullScreenMode?: NoYes | null;
  /**
   * Font Scheme.
   * @nullable
   */
  declare fontScheme?: RetailFontScheme | null;
  /**
   * One-to-many navigation property to the {@link RetailTerminals} entity.
   */
  declare retailTerminal: RetailTerminals<T>[];

  constructor(_entityApi: RetailVisualProfilesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailVisualProfilesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  profileId: DeserializedType<T, 'Edm.String'>;
  showApplicationBarLabel?: NoYes | null;
  pictureIdPortrait: DeserializedType<T, 'Edm.Int32'>;
  screenHeight: DeserializedType<T, 'Edm.Int32'>;
  showDateTime?: NoYes | null;
  skinFile?: DeserializedType<T, 'Edm.Binary'> | null;
  pallet?: DeserializedType<T, 'Edm.String'> | null;
  showProductConfigurationId?: NoYes | null;
  defaultSearchResultDisplayView?: DefaultSearchResultDisplayView | null;
  backgroundPictureId: DeserializedType<T, 'Edm.Int32'>;
  posSkinName?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  designAllowedOnPos?: NoYes | null;
  retailBypassItemAddedDialog?: NoYes | null;
  retailDeviceTypeId: DeserializedType<T, 'Edm.Int32'>;
  pictureId: DeserializedType<T, 'Edm.Int32'>;
  hideCursor?: NoYes | null;
  screenWidth: DeserializedType<T, 'Edm.Int32'>;
  fullScreenMode?: NoYes | null;
  fontScheme?: RetailFontScheme | null;
  retailTerminal: RetailTerminalsType<T>[];
}
